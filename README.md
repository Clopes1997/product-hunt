Product Hunt- README
Overview
This project is a Product Hunt clone built with ReactJS. It features a responsive interface displaying a list of products with upvote functionality and detailed product pages.
Technologies Used

ReactJS
React Router for navigation
Styled Components for styling
Jest and React Testing Library for unit tests

Features

Product listing with popularity sorting
Product details view
Upvoting mechanism
Responsive UI similar to Product Hunt

Project Structure
The application follows a component-based architecture:

components/ - Reusable UI components

Header/ - App header with search functionality
TabBar/ - Navigation tabs (Popular/Newest)
ProductCard/ - Card displaying product info in lists
ProductList/ - Container for product cards
ProductDetail/ - Detailed view of a product
common/ - Shared UI elements (Button, Badge, etc.)

pages/ - Page components

HomePage.jsx - Main product listing page
DetailPage.jsx - Product details page


hooks/ - Custom React hooks

useProducts.js - Product data management


utils/ - Helper functions

Implementation Details
Styling

Used styled-components for component-specific styling
Created a global theme for consistent colors, spacing, and typography

State Management

Used React hooks (useState, useEffect) for local state
Created custom hook (useProducts) to manage product data

Routing

Implemented React Router for navigation between views
Added route parameters for product details (/product/:id)

Testing

Unit tests for all components using Jest and React Testing Library
Test utilities for common testing patterns
