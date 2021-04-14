import styles from "./Signup.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Signup = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.btn}>
        SIGN UP
      </button>
      <button type="button" className={styles.btn}>
        LOG IN
      </button>
      <ShoppingCartIcon style={{ color: "ffffff", fontSize: 32 }} />
    </div>
  );
};

export default Signup;
