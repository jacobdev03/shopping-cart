import styles from './CartItem.module.css';

const CartItem = ({ item, quantity }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{quantity.count}</p>
      <p>{item.price * quantity.count}</p>
    </div>
  );
};

export default CartItem;
