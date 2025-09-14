import { useContext } from "react";
import styles from "../styles/Contact.module.css";
import { ThemeContext } from "./ThemeContext";

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your full name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your message:
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
