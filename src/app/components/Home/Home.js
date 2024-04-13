"use client";
import styles from "./home.module.css";
import { motion } from "framer-motion";

//framer motion varients
const leftContainer = {
  show: {
    transition: {
      delayChildren: 1.35,
      staggerChildren: 0.1,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const rightContainer = {
  show: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.2,
    },
  },
};

const rightItem = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
const circleLogo = {
  hidden: { opacity: 0,scale: 0,   x: "-52%"},
  show: {
    opacity: 1,
   scale: 1,
    x: "-52%",
    rotate: 720,
    // translateX(-52%)
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};



const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <motion.div
        className={styles.leftHome}
        variants={leftContainer}
        initial="hidden"
        animate="show"
      >
        <div className={styles.content}>
          <motion.h1 variants={leftItem}>
            Empowering Cancer Journeys with Expert Guidance{" "}
          </motion.h1>
          <motion.p variants={leftItem}>
            Discover expert support and personalized solutions for your cancer
            journey with CancerCure. Our comprehensive services and dedicated
            team are here to empower you every step of the way.
          </motion.p>
          <motion.div className={styles.mailSection} variants={leftItem}>
            <input
              type="email"
              name="email"
              placeholder="Type your e-mail"
              className={styles.email}
            />
            <button className={styles.mailBtn}>Get a coach</button>
          </motion.div>
        </div>
        <motion.div className={styles.languageBtn} variants={leftItem}>
          <img src="./homeAssets/world.svg" alt="image" />
          EN
        </motion.div>
      </motion.div>
      <div className={styles.rightHome}>
        <motion.div
          className={styles.imageWrapper}
          variants={rightContainer}
          initial="hidden"
          animate="show"
        >
          <div className={styles.top}>
            <div className={styles.left} >
              <motion.div className={styles.imgWra} variants={rightItem}>
                <img src="./homeAssets/1.png" alt="image" />
                <div className={styles.numbers}>
                  <p>10k+</p>
                  <span>Patients guided</span>
                </div>
              </motion.div>
              <motion.div className={styles.imgWra} variants={rightItem}>
                <img src="./homeAssets/2.png" alt="image" />
                <div className={styles.numbers}>
                  <p>75%</p>
                  <span>Side Effects Reduced</span>
                </div>
              </motion.div>
              <motion.div className={styles.circleEye} variants={circleLogo}>
                <img src="./homeAssets/5.png" alt="image" />
              </motion.div>
            </div>
            <motion.div className={styles.right} variants={rightItem}>
              <div className={styles.imgWra}>
                <img src="./homeAssets/3.png" alt="image" />
                <div className={styles.numbers}>
                  <p>10k+</p>
                  <span>Patients guided</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.bottom}>
            <motion.div className={styles.imgWra} variants={rightItem}>
              <img src="./homeAssets/4.png" alt="image" />
              <div className={styles.numbers}>
                <p>75%</p>
                <span>Side Effects Reduced</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
