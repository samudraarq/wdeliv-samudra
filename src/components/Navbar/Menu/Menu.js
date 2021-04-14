import styles from "./Menu.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const Menu = () => {
  return (
    <div className={styles.menuIcon}>
      <MenuIcon style={{ color: "ffffff", fontSize: 32 }} />
      <span>WINE.DELIVERY</span>
    </div>
  );
};

export default Menu;
