import styles from "./Menu.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menuIcon}>
      <MenuIcon style={{ color: "ffffff", fontSize: 32 }} />
      <Link to="/">WINE.DELIVERY</Link>
    </div>
  );
};

export default Menu;
