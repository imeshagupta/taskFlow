import { useContext, useState } from "react";
import styles from "../styles/Navbar.module.css";
import IconImg from "../assets/icon.jpg";
import { ThemeContext } from "./ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.logo}>
        <img src={IconImg} alt="icon" className={styles.iconImg} />
        <h1>Task Flow</h1>
      </div>

      <div className={styles.mobileControls}>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <button className={styles.themeBtn} onClick={toggleTheme}>
          {theme === "dark" ? <CiLight size={22} /> : <MdLightMode size={22} />}
        </button>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <button
        className={`${styles.themeBtn} ${styles.desktopTheme}`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <CiLight size={22} /> : <MdLightMode size={22} />}
      </button>
    </nav>
  );
}

export default Navbar;
