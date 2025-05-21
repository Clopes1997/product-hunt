import { useState, useEffect, useCallback } from 'react';

/**
 * API endpoint for the ProductHunt GraphQL API
 */
const API_URL = 'https://api.producthunt.com/v2/api/graphql';

/**
 * Authentication token for the ProductHunt API
 */
const TOKEN = 'DKuf2nUeKZcegGZ0fdVxk1Rda8NXCmbECXYyqo8Bp7s';

/**
 * Cache to store fetched products by their ID for quick retrieval
 * This prevents unnecessary API calls when viewing the same product multiple times
 */
const productCache = new Map();

/**
 * Cache for product lists based on query parameters
 * Stores lists of products with their pagination info to avoid refetching the same data
 */
const listCache = new Map();

/**
 * GraphQL query to fetch a list of products
 * Parameters:
 * - order: Sort order (VOTES or NEWEST)
 * - after: Cursor for pagination
 * - postedAfter: Filter for products posted after a specific date
 * - postedBefore: Filter for products posted before a specific date
 */
const QUERY = `
  query ($order: PostsOrder, $after: String, $postedAfter: DateTime, $postedBefore: DateTime) {
    posts(
      order: $order,
      first: 20,
      after: $after,
      postedAfter: $postedAfter,
      postedBefore: $postedBefore
    ) {
      edges {
        node {
          id
          name
          tagline
          description
          url
          votesCount
          featuredAt
          createdAt
          thumbnail {
            url
          }
          media {
            url
            videoUrl
            type
          }
          topics {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

/**
 * GraphQL query to fetch a single product by ID
 * Parameters:
 * - id: The unique identifier of the product
 */
const PRODUCT_BY_ID_QUERY = `
  query ($id: ID!) {
    post(id: $id) {
      id
      name
      tagline
      description
      url
      votesCount
      featuredAt
      createdAt
      thumbnail {
        url
      }
      media {
        url
        videoUrl
        type
      }
      topics {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

/**
 * Creates a unique cache key from query parameters for the list cache
 * @param {string} order - The sort order (VOTES or NEWEST)
 * @param {string|null} cursor - Pagination cursor
 * @param {string|null} postedAfter - ISO date string for filtering by post date (start)
 * @param {string|null} postedBefore - ISO date string for filtering by post date (end)
 * @returns {string} A unique string key for the cache
 */
const createCacheKey = (order, cursor, postedAfter, postedBefore) => {
  return `${order}|${cursor || 'null'}|${postedAfter || 'null'}|${postedBefore || 'null'}`;
};

/**
 * Custom hook for fetching, managing and interacting with products
 * Provides:
 * - List of products with pagination
 * - Product filtering by date
 * - Tab selection (popular/newest)
 * - Product upvoting functionality
 * - Loading & error states
 * - Individual product retrieval
 */
export const useProducts = () => {
  // State for the list of products
  const [products, setProducts] = useState([]);
  
  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Active tab determines the sort order (popular = VOTES, newest = NEWEST)
  const [activeTab, setActiveTab] = useState('popular');
  
  // Pagination state
  const [cursor, setCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  
  // Date filter state
  const [filterDate, setFilterDate] = useState(null);
  
  // Prevent excessive API calls
  const [lastFetch, setLastFetch] = useState(null);
  
  // Track which products have been upvoted by the user
  const [upvotedProducts, setUpvotedProducts] = useState(new Set());

  /**
   * Calculates how many days ago a date was from today
   * Used for the badge "X days ago" display
   * @param {string} dateStr - ISO format date string
   * @returns {number|null} Number of days or null if date is invalid
   */
  const calculateDaysAgo = useCallback((dateStr) => {
    if (!dateStr) return null;
    const featuredDate = new Date(dateStr);
    const now = new Date();
    const diffInMs = now - featuredDate;
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }, []);

  /**
   * Fetches products from the API with filtering and pagination
   * @param {boolean} reset - Whether to reset the current list (new search) or append (pagination)
   */
  const fetchProducts = useCallback(async (reset = false) => {
    // Prevent duplicate fetches
    if (loading && !reset) return;
    if (!hasNextPage && !reset) return;
    
    // Throttle API calls to prevent excessive requests
    const now = Date.now();
    if (lastFetch && now - lastFetch < 300) { // 300ms throttle
      return;
    }
    setLastFetch(now);

    setLoading(true);
    setError(null);

    // Determine sort order based on active tab
    const order = activeTab === 'popular' ? 'VOTES' : 'NEWEST';
    const currentCursor = reset ? null : cursor;

    // Configure date filters if a specific date is selected
    let postedAfter = null;
    let postedBefore = null;

    if (filterDate) {
      // Set to start of the selected day (midnight)
      postedAfter = new Date(filterDate);
      postedAfter.setHours(0, 0, 0, 0);

      // Set to end of the selected day (23:59:59)
      postedBefore = new Date(filterDate);
      postedBefore.setHours(23, 59, 59, 999);
    }

    // Create cache key to check if we've already fetched this data
    const cacheKey = createCacheKey(
      order, 
      currentCursor, 
      postedAfter?.toISOString(), 
      postedBefore?.toISOString()
    );
    
    // First check the cache for this exact query
    const cached = listCache.get(cacheKey);
    if (cached) {
      if (reset) {
        setProducts(cached.products);
      } else {
        setProducts(prev => [...prev, ...cached.products]);
      }
      setCursor(cached.endCursor);
      setHasNextPage(cached.hasNextPage);
      setLoading(false);
      return;
    }

    try {
      // Make the GraphQL API request
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          query: QUERY,
          variables: {
            order,
            after: currentCursor,
            postedAfter: postedAfter?.toISOString(),
            postedBefore: postedBefore?.toISOString()
          },
        }),
      });

      const json = await res.json();

      // Handle GraphQL errors
      if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        setError('Failed to load products');
        setLoading(false);
        return;
      }

      // Extract product data from response
      const edges = json?.data?.posts?.edges || [];
      const pageInfo = json?.data?.posts?.pageInfo || {};

      // Transform API response into our app's product format
      const newProducts = edges.map(({ node }, index) => {
        // Mark every 5th product as upvoted for demo purposes
        const hasUpvoted = (index + 1) % 5 === 0;
        if (hasUpvoted) {
          setUpvotedProducts(prev => new Set([...prev, node.id]));
        }
        
        const product = {
          id: node.id,
          name: node.name,
          description: node.description || node.tagline,
          detailDescription: node.tagline,
          url: node.url,
          upvotes: node.votesCount,
          hasUpvoted,
          thumbnail: node.thumbnail?.url,
          images: node.media ? node.media.map(m => m.url).filter(Boolean) : [],
          category: node.topics?.edges?.[0]?.node?.name || 'General',
          createdAt: node.createdAt,
          badge: {
            text: 'Featured',
            daysAgo: calculateDaysAgo(node.featuredAt),
          },
        };
        // Cache individual products for quick retrieval
        productCache.set(node.id, product);
        return product;
      });

      // Cache the list results for future use
      listCache.set(cacheKey, {
        products: newProducts,
        endCursor: pageInfo.endCursor || null,
        hasNextPage: pageInfo.hasNextPage || false
      });

      // Update pagination state
      setCursor(pageInfo.endCursor || null);
      setHasNextPage(pageInfo.hasNextPage || false);

      // Update product list: reset or append
      if (reset) {
        setProducts(newProducts);
      } else {
        setProducts(prev => [...prev, ...newProducts]);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [activeTab, calculateDaysAgo, cursor, filterDate, hasNextPage, loading, lastFetch]);

  // Fetch products when component mounts or active tab changes
  useEffect(() => {
    fetchProducts(true);
  }, [activeTab, fetchProducts]);

  // Fetch products when date filter changes
  useEffect(() => {
    fetchProducts(true);
  }, [filterDate, fetchProducts]);

  /**
   * Load more products (pagination)
   * Called when user scrolls to the bottom of the list
   */
  const loadMore = () => {
    if (!loading && hasNextPage) {
      fetchProducts();
    }
  };

  /**
   * Filter products by a specific date
   * @param {string} dateString - ISO format date string to filter by
   */
  const filterByDate = (dateString) => {
    const date = new Date(dateString);
    // Validate the date
    if (isNaN(date.getTime())) {
      console.error('Invalid date format');
      return;
    }

    setFilterDate(dateString);
    setCursor(null);
    setHasNextPage(true);
  };

  /**
   * Clear the date filter and show all products
   */
  const clearDateFilter = () => {
    setFilterDate(null);
    setCursor(null);
    setHasNextPage(true);
  };

  /**
   * Toggle the upvote status of a product
   * @param {string} id - The product ID to toggle upvote for
   */
  const toggleUpvote = (id) => {
    // Update the set of upvoted product IDs
    setUpvotedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
    
    // Update the hasUpvoted flag in the products list
    setProducts(prev => 
      prev.map(product => 
        product.id === id 
          ? { ...product, hasUpvoted: !product.hasUpvoted } 
          : product
      )
    );
  };

  /**
   * Fetch a product by its ID
   * Attempts to find it in cache, local state, or fetch from API
   * @param {string} id - The product ID to retrieve
   * @returns {Promise<Object|null>} The product or null if not found
   */
  const getProductById = useCallback(async (id) => {
    // First check if we have it in cache
    if (productCache.has(id)) {
      const product = productCache.get(id);
      // Add the upvote status
      return {
        ...product,
        hasUpvoted: upvotedProducts.has(id)
      };
    }
    
    // Then check if we have it in local state
    const localProduct = products.find(product => product.id === String(id));
    if (localProduct) {
      // Update cache
      productCache.set(id, localProduct);
      return localProduct;
    }
    
    // If not in cache or local state, fetch it directly from API
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          query: PRODUCT_BY_ID_QUERY,
          variables: { id },
        }),
      });

      const json = await res.json();
      
      if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        return null;
      }
      
      const node = json?.data?.post;
      
      if (!node) return null;
      
      // Transform API response to product format
      const product = {
        id: node.id,
        name: node.name,
        description: node.description || node.tagline,
        detailDescription: node.tagline,
        url: node.url,
        upvotes: node.votesCount,
        hasUpvoted: upvotedProducts.has(id),
        thumbnail: node.thumbnail?.url,
        images: node.media ? node.media.map(m => m.url).filter(Boolean) : [],
        category: node.topics?.edges?.[0]?.node?.name || 'General',
        createdAt: node.createdAt,
        badge: {
          text: 'Featured',
          daysAgo: calculateDaysAgo(node.featuredAt),
        }
      };
      
      // Cache the fetched product
      productCache.set(id, product);
      return product;
    } catch (err) {
      console.error('Error fetching product by ID:', err);
      return null;
    }
  }, [calculateDaysAgo, products, upvotedProducts]);

  // Return all the state and functions as the hook API
  return {
    products,
    loading,
    error,
    activeTab,
    setActiveTab,
    getProductById,
    loadMore,
    filterByDate,
    clearDateFilter,
    isFiltered: !!filterDate,
    toggleUpvote,
    upvotedProducts
  };
};

export default useProducts;
