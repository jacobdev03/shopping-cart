import styles from './ProductCard.module.css';

const ProductCard = ({ product, handleAdd, handleDelete }) => {
  return (
    <div className={styles.card} id={product.id} title={product.title}>
      <img src={product.image} alt={product.title + 'image'} />
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>${product.price}</p>
      <input type="number" name="quantity" id="quantity" />
      <button onClick={handleDelete}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default ProductCard;
