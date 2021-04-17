import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

import styles from "./Card.module.css";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { toast } from "react-toastify";

const Card = ({ product }) => {
  const { toggleBookmarked, addToCart } = useContext(ProductContext);

  let qty;

  if (product.newQty === 0) {
    qty = "Sold Out";
  } else if (product.newQty <= 5) {
    qty = `${product.newQty} left`;
  }

  const onClickCart = (id) => {
    addToCart(id);
    toast.info(`${product.name} ${product.vintageYear} is added to cart`, {
      className: styles.toast,
    });
  };

  const onClickBookmarked = (id) => {
    toggleBookmarked(id);
    if (product.bookmarked === false) {
      toast.info(`${product.name} ${product.vintageYear} is bookmarked`, {
        className: styles.toast,
      });
    }
  };

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
              disabled={product.newQty === 0}
              onClick={() => onClickCart(product.id)}
            >
              ADD TO CART
            </button>
            <span
              className={styles.bookmark}
              onClick={() => onClickBookmarked(product.id)}
            >
              {product.bookmarked === true ? (
                <TurnedInIcon style={{ color: "#d7be69", fontSize: 28 }} />
              ) : (
                <TurnedInNotIcon style={{ color: "#d7be69", fontSize: 28 }} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
