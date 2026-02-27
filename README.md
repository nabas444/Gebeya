# Amazon Clone (Frontend)

## Overview
This is a React frontend project modeled after Amazon's shopping experience. It includes a product catalog, category browsing, product details, a cart with quantity controls, and a subtotal panel. The backend is planned but not implemented yet.

## Current Status
- Frontend is about 75% complete.
- Backend is pending and will be added later.

## Features
- Product listing and category results
- Product detail page
- Cart with quantity increment and decrement
- Subtotal calculation and item count
- Header, footer, and carousel UI
- Responsive layout

## Tech Stack
- React (Create React App)
- React Router
- Context + Reducer state management
- Axios for API requests
- MUI Rating
- CSS Modules and plain CSS
- React Icons

## Data Source (Temporary)
The frontend currently pulls products from a public API.
```
https://fakestoreapi.com
```

## Getting Started
Install dependencies:
```bash
npm install
```

Run the app in development:
```bash
npm start
```

## Available Scripts
- `npm start` Runs the app in development mode
- `npm test` Runs tests in watch mode
- `npm run build` Builds the app for production
- `npm run eject` Ejects CRA configuration (one-way)

## Project Structure
- `src/Api` API endpoints
- `src/components` Shared UI components
- `src/pages` Route-level pages
- `src/utility` Reducer, action types, and shared logic
- `src/Routing.jsx` App routes
- `src/index.js` App entry point and provider setup

## Planned Backend (Next Phase)
- Authentication and user accounts
- Orders and payment flow
- Persistent cart storage
- Product search and filtering

