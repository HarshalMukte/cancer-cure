"use client"

import { useEffect, useState } from "react"
import styles from "./service.module.css"

const Service = () => {
  const [number, setNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        // setNumber((prevNumber) => prevNumber === 4 ? 1 : prevNumber + 1);
      }, 1500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [number, isHovered]);

  const cardData = [
    {
      id: 1,
      title: "Supplements",
      text: "Discover our transformative programs for cancer recovery. Personalized, holistic, and empowering",
      img: "./serviceAssets/1.svg"
    },
    {
      id: 2,
      title: "Care Programs",
      text: "Discover our transformative programs for cancer recovery. Personalized, holistic, and empowering",
      img: "./serviceAssets/2.svg"
    },
    {
      id: 3,
      title: "Oncologists",
      text: "Discover our transformative programs for cancer recovery. Personalized, holistic, and empowering",
      img: "./serviceAssets/3.svg"
    },
    {
      id: 4,
      title: "Experts",
      text: "Discover our transformative programs for cancer recovery. Personalized, holistic, and empowering",
      img: "./serviceAssets/4.svg"
    },
  ]


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.serviceLeft}>
          <p>Our Services</p>
          <h2>Care Programs</h2>
          <div className={styles.dots}>
            {
              cardData.map((curr, index) => (
                <span key={index} className={number === index + 1 ? styles.active : ""}></span>
              ))
            }
          </div>
          <button className={styles.serviceBtn}>
            Learn More
            <img src="./serviceAssets/arrowIcon.png" alt="image" />
          </button>
      </div>
      <div className={styles.serviceRight}>
          <p className={styles.text}>
          Explore our services designed to support your cancer healing journey. From expert oncology care to personalized integrative programs & resources
          </p>
          <div className={styles.cards}>

            {
              cardData.map((item, index) => {
                return (
                  <div  key={item?.id || (index + 1)} className={(number === item.id)? `${styles.card} ${styles.active}` : styles.card } 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                    <img src={item.img} alt="image" />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <button>
                      <img src="./serviceAssets/arrowWhite.png" alt="image" />
                    </button>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Service