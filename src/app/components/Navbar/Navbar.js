"use client"
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo} onClick={() => setActiveNav("#home")}>
        <img src="./icon.png" alt="logoImage" />
      </a>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="#home" className={activeNav === "#home" ? styles.active : ""} onClick={() => setActiveNav("#home")}>Home</a>
        </li>
        <li className={styles.link}>
          <a href="#service" className={activeNav === "#service" ? styles.active : ""} onClick={() => setActiveNav("#service")}>Services</a>
        </li>
        <li className={styles.link}>
          <a href="#experts" className={activeNav === "#experts" ? styles.active : ""} onClick={() => setActiveNav("#experts")}>Experts</a>
        </li>
        <li className={styles.link}>
          <a href="#medicine" className={activeNav === "#medicine" ? styles.active : ""} onClick={() => setActiveNav("#medicine")}>Medicine</a>
        </li>
        <li className={styles.link}>
          <a href="#about" className={activeNav === "#about" ? styles.active : ""} onClick={() => setActiveNav("#about")}>About Us</a>
        </li>
        <li className={styles.link}>
          <a href="#contact" className={activeNav === "#contact" ? styles.active : ""} onClick={() => setActiveNav("#contact")}>Contact Us</a>
        </li>
      </ul>
      <button className={styles.loginBtn}>Login</button>
    </nav>
  );
};

export default Navbar;
