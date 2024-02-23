import Navbar from '../Navbar/Navbar';
import CartItem from '../CartItem/CartItem';
import styles from './CartPage.module.css';

const CartPage = ({ cartItems }) => {
  const quantity = cartItems.reduce((acc, curr) => {
    acc[curr.id] = acc[curr.id] || { name: curr.title, count: 0 };
    acc[curr.id]['count'] += 1;
    return acc;
  }, {});

  const uniqueItemsMap = cartItems.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const itemsToDisplay = Object.values(uniqueItemsMap);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className={styles.cartContainer}>
        {itemsToDisplay.length > 0 ? (
          <div className={styles.cartItems}>
            {itemsToDisplay.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                quantity={Object.values(quantity).find((q) => q.name === item.title)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cartItems}>Your cart is empty</div>
        )}

        <div className={styles.checkout}>Checkout</div>
      </div>
    </>
  );
};

export default CartPage;
