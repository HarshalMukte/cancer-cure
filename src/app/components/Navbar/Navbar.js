"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import AnimatedMenuIcon from "./AnimatedMenu";
import { motion } from "framer-motion";

//framer motion varients
const container = {
  show: {
    transition: {
      // delayChildren: 1.35,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: .5,
    },
  },
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveNav("#home")
  }, [activeNav])
  

  return (
    <motion.nav className={styles.navbar}
    variants={container}
    initial="hidden"
    animate="show">
      <motion.a
        href="#home"
        className={styles.logo}
        onClick={() => setActiveNav("#home")}
        variants={item}
      >
        <img src="./icon.png" alt="logoImage" />
      </motion.a>
      <ul className={`${styles.links} ${isOpen ? styles.linkActive : ""}`}>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#home"
            className={activeNav === "#home" ? styles.active : ""}
            onClick={() => setActiveNav("#home")}
          >
            Home
          </a>
        </motion.li>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#service"
            className={activeNav === "#service" ? styles.active : ""}
            onClick={() => setActiveNav("#service")}
          >
            Services
          </a>
        </motion.li>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#experts"
            className={activeNav === "#experts" ? styles.active : ""}
            onClick={() => setActiveNav("#experts")}
          >
            Experts
          </a>
        </motion.li>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#medicine"
            className={activeNav === "#medicine" ? styles.active : ""}
            onClick={() => setActiveNav("#medicine")}
          >
            Medicine
          </a>
        </motion.li>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#about"
            className={activeNav === "#about" ? styles.active : ""}
            onClick={() => setActiveNav("#about")}
          >
            About Us
          </a>
        </motion.li>
        <motion.li className={styles.link} variants={item}>
          <a
            href="#contact"
            className={activeNav === "#contact" ? styles.active : ""}
            onClick={() => setActiveNav("#contact")}
          >
            Contact Us
          </a>
        </motion.li>
      </ul>
      <motion.button className={styles.loginBtn} variants={item}>Login</motion.button>
      <motion.div variants={item}>
      <AnimatedMenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
