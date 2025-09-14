import { useContext } from "react";
import styles from "../styles/Footer.module.css";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      <div className={styles.footerLinks}>
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
      <div className={styles.socialMedia}>
        <Link
          to="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Gmail
        </Link>
        <Link
          to="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Instagram
        </Link>
        <span className={styles.phone}>📞 +91 9999999999</span>
      </div>
    </footer>
  );
}

export default Footer;
