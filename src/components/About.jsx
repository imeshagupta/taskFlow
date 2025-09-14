import { useContext } from "react";
import styles from "../styles/About.module.css";
import Logo from "../assets/logo.png";
import { ThemeContext } from "./ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>

        <div className={styles.logoWrapper}>
          <img src={Logo} alt="Logo" className={styles.logoImg} />
        </div>

        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Welcome to Task Flow! We help you organize and track your daily
            tasks efficiently. Our goal is to make task management simple,
            intuitive, and productive.
          </p>
          <p className={styles.text}>
            With Task Flow, you can prioritize your tasks, mark them as
            completed, and stay on top of your goals every day. Start planning
            your day the smart way!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
