import styles from "./Navbar.module.css";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Signup from "./Signup/Signup";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Menu />
      <Search />
      <Signup />
    </div>
  );
};

export default Navbar;
