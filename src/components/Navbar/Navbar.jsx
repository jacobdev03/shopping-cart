import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import styles from './Navbar.module.css';

const Navbar = ({ cartItems }) => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>
        <h2>Logo</h2>
      </Link>
      <div className={styles.nav_links}>
        <Link to={'/'}>Home</Link>
        <a>Shop</a>
      </div>
      <Link to={'/cart'}>
        <Cart cartItems={cartItems} />
      </Link>
    </nav>
  );
};

export default Navbar;
