import { renderHook, act } from '@testing-library/react-hooks';
import { useProducts } from './useProducts';

// Mock the fetch function
global.fetch = jest.fn();

/**
 * Mocks a successful API response with products data
 * @param {Object} data - The data to include in the mocked response
 */
const mockSuccessResponse = (data) => {
  global.fetch.mockResolvedValueOnce({
    json: async () => data
  });
};

/**
 * Sets up a mock product data response
 * @returns {Object} Mock GraphQL response with products
 */
const setupMockProductsResponse = () => {
  return {
    data: {
      posts: {
        edges: [
          {
            node: {
              id: '1',
              name: 'Product 1',
              tagline: 'Tagline for product 1',
              description: 'Description for product 1',
              url: 'https://example.com/1',
              votesCount: 100,
              featuredAt: '2023-05-15T00:00:00Z',
              createdAt: '2023-05-10T00:00:00Z',
              thumbnail: { url: 'https://example.com/thumb1.jpg' },
              media: [{ url: 'https://example.com/img1.jpg' }],
              topics: {
                edges: [{ node: { name: 'Category 1' } }]
              }
            }
          },
          {
            node: {
              id: '2',
              name: 'Product 2',
              tagline: 'Tagline for product 2',
              description: 'Description for product 2',
              url: 'https://example.com/2',
              votesCount: 200,
              featuredAt: '2023-05-16T00:00:00Z',
              createdAt: '2023-05-12T00:00:00Z',
              thumbnail: { url: 'https://example.com/thumb2.jpg' },
              media: [{ url: 'https://example.com/img2.jpg' }],
              topics: {
                edges: [{ node: { name: 'Category 2' } }]
              }
            }
          }
        ],
        pageInfo: {
          endCursor: 'cursor123',
          hasNextPage: true
        }
      }
    }
  };
};

/**
 * Sets up a mock single product response
 * @param {string} id - The product ID to include in the response
 * @returns {Object} Mock GraphQL response with a single product
 */
const setupMockSingleProductResponse = (id) => {
  return {
    data: {
      post: {
        id,
        name: `Product ${id}`,
        tagline: `Tagline for product ${id}`,
        description: `Description for product ${id}`,
        url: `https://example.com/${id}`,
        votesCount: 150,
        featuredAt: '2023-05-19T00:00:00Z',
        createdAt: '2023-05-15T00:00:00Z',
        thumbnail: { url: `https://example.com/thumb${id}.jpg` },
        media: [{ url: `https://example.com/img${id}.jpg` }],
        topics: {
          edges: [{ node: { name: `Category ${id}` } }]
        }
      }
    }
  };
};

describe('useProducts hook', () => {
  beforeEach(() => {
    global.fetch.mockClear();
  });

  it('should fetch products on initial render', async () => {
    const mockResponse = setupMockProductsResponse();
    mockSuccessResponse(mockResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.loading).toBe(false);
    expect(result.current.products.length).toBe(2);
    expect(result.current.products[0].name).toBe('Product 1');
    expect(result.current.products[1].name).toBe('Product 2');
    // Every 5th product should be upvoted (but our sample is too small so none are)
    expect(result.current.products[0].hasUpvoted).toBeFalsy();
  });

  it('should fetch a product by ID when not in local state', async () => {
    // Setup mock response for initial products fetch
    mockSuccessResponse(setupMockProductsResponse());
    
    // Setup mock response for getProductById
    mockSuccessResponse(setupMockSingleProductResponse('3'));

    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    await waitForNextUpdate();

    // Request a product that's not in the initial state
    let product;
    await act(async () => {
      product = await result.current.getProductById('3');
    });
    
    expect(product).not.toBeNull();
    expect(product.id).toBe('3');
    expect(product.name).toBe('Product 3');
  });

  it('should toggle a product upvote state', async () => {
    // Setup mock response
    mockSuccessResponse(setupMockProductsResponse());
    
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    await waitForNextUpdate();

    // Initially products aren't upvoted
    expect(result.current.products[0].hasUpvoted).toBeFalsy();
    
    // Upvote the first product
    act(() => {
      result.current.toggleUpvote('1');
    });
    
    // Now the first product should be upvoted
    expect(result.current.products[0].hasUpvoted).toBeTruthy();
    
    // Upvote again to turn it off
    act(() => {
      result.current.toggleUpvote('1');
    });
    
    // Now it should be back to not upvoted
    expect(result.current.products[0].hasUpvoted).toBeFalsy();
  });

  it('should handle filter by date', async () => {
    // Setup mock responses
    mockSuccessResponse(setupMockProductsResponse());
    mockSuccessResponse(setupMockProductsResponse()); // For the filter fetch
    
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    await waitForNextUpdate();

    // Filter by date
    act(() => {
      result.current.filterByDate('2023-05-20');
    });
    
    // Loading should be true during the fetch
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    
    // Should have fetched with the date filter
    expect(result.current.isFiltered).toBe(true);
    
    // Check that fetch was called with appropriate parameters
    expect(global.fetch).toHaveBeenCalledTimes(2); // Initial + filter
  });
}); 