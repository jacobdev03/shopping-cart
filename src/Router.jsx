import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Products from './components/Products/Products.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import './index.css';

const Router = () => {
  const [cartItems, setCartItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Products cartItems={cartItems} setCartItems={setCartItems} />,
    },
    {
      path: '/cart',
      element: <CartPage cartItems={cartItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
