"use client"
import { motion } from "framer-motion"
import styles from "./contact.module.css"

//framer motion varients
const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const motionItem = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
       <div className={styles.content}>
        <h2>Consult  an Oncology Expert</h2>
        <p>Improve your treatment & recovery with science-based integrative therapies​​</p>
      </div>
      <motion.div className={styles.cardsCircle}
       variants={container}
       initial="hidden"
       whileInView="show">

        <motion.div variants={motionItem} className={`${styles.circle} ${styles.smallCircle}`}>
          <img src="/contactAssets/1.png" alt="image" />
        </motion.div>
        <motion.div variants={motionItem} className={`${styles.circle} ${styles.left}`}>
          <img src="/contactAssets/2.png" alt="image" />
        </motion.div>
        <motion.div variants={motionItem} className={`${styles.circle} ${styles.middle}`}>
          <img src="/contactAssets/3.png" alt="image" />
        </motion.div>
        <motion.div variants={motionItem} className={`${styles.circle} ${styles.right}`}>
          <img src="/contactAssets/4.png" alt="image" />
        </motion.div>
        <motion.div variants={motionItem} className={`${styles.circle} ${styles.smallCircle}`}>
          <img src="/contactAssets/5.png" alt="image" />
        </motion.div>
      </motion.div>
      <button className={styles.contactBtn}>
          Learn more
      </button>
    </div>
  )
}

export default Contact