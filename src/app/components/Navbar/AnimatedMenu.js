import styles from "./navbar.module.css";

const AnimatedMenuIcon = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default AnimatedMenuIcon;
