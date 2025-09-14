import { useContext } from "react";
import styles from "../styles/Footer.module.css";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <ul>
          <li className={styles.listItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="/about">About</a>
          </li>
          <li className={styles.listItem}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <a
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Gmail
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Instagram
        </a>
        <span className={styles.phone}>📞 +91 9999999999</span>
      </div>
    </footer>
  );
}

export default Footer;
