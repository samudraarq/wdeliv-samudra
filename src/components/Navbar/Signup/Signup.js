import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

import styles from "./Signup.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Signup = () => {
  const { cartSize } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.btn}>
        SIGN UP
      </button>
      <button type="button" className={styles.btn}>
        LOG IN
      </button>
      <div className={styles.cart}>
        <ShoppingCartIcon style={{ color: "ffffff", fontSize: 32 }} />
        {cartSize > 0 && (
          <div className={styles.cartSizeContainer}>
            <span className={styles.cartSize}>{cartSize}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
