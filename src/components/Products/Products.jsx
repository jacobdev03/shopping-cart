import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const handleAdd = (event) => {
    const quantity = parseInt(event.currentTarget.parentNode.children.quantity.value);
    const itemToAdd = products.find(
      (product) => product.title === event.currentTarget.parentNode.title
    );
    for (let i = 0; i < quantity; i++) {
      setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
    }
  };

  const handleDelete = (event) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.title === event.currentTarget.parentNode.title
    );
    setCartItems(cartItems.filter((item, i) => i != itemIndex));
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            product={product}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
