import styles from "./Card.module.css";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

const Card = ({ product }) => {
  let qty;

  if (product.qty === 0) {
    qty = "Sold Out";
  } else if (product.qty <= 5) {
    qty = `${product.qty} left`;
  }

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.description}>
        <div>
          <p className={styles.name}>
            {product.name} {product.vintageYear}
          </p>
          <p className={styles.producer}>{product.grapeVarietes}</p>
          <p className={styles.country}>
            {product.region}, {product.country}
          </p>
        </div>
        <div>
          <div className={styles.priceContainer}>
            <p className={styles.price}>S$ {product.price.toFixed(2)}</p>
            {qty && (
              <div className={styles.qty}>
                <p>{qty}</p>
              </div>
            )}
          </div>

          <div className={styles.cta}>
            <button
              type="button"
              className={styles.btn}
              disabled={product.qty === 0}
            >
              ADD TO CART
            </button>
            <span className={styles.bookmark}>
              <TurnedInNotIcon style={{ color: "#d7be69", fontSize: 28 }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
