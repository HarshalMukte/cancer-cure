import styles from "./experts.module.css"

import React from 'react'

const Experts = () => {
  const cardData = [
    {
      id: 1,
      img: "./programAssets/1.jpg",
      title: "Emotional & Meditation",
      desc: "Enhance Your Journey with Positivity & Willpower"
    },
    {
      id: 2,
      img: "./programAssets/2.jpg",
      title: "Pain & Weakness",
      desc: "Holistic Approach to Manage Pain and Boost Strength"
    },
    {
      id: 3,
      img: "./programAssets/3.jpg",
      title: "Nutrition",
      desc: "Personalized Nutritional Care for Cancer Patients"
    },
    {
      id: 4,
      img: "./programAssets/4.jpg",
      title: "Ayurveda",
      desc: "Elevate your Journey with Enhanced Immunity & Well-being"
    },
    {
      id: 5,
      img: "./programAssets/5.jpg",
      title: "Medical Cannabis",
      desc: "Relief & Comfort from pain and other side effects in Your Cancer Journey"
    },
    {
      id: 6,
      img: "./programAssets/6.jpg",
      title: "Yoga & Exercise",
      desc: "Elevate Wellness & Recovery in Cancer"
    },
  ]
  return (
    <div className={styles.wrapper}>
        <div className={styles.headingContent}>
          <p className={styles.heading}>Other Programs</p>
          <p className={styles.para}>Our  programs provide you full support so that you can focus on your healing & recovery</p>
        </div>
        <div className={styles.cards}>

          {
            cardData.map((item, index) => {
              return (
                <div  key={item?.id || (index + 1)} className={styles.card}>
                  <div className={styles.image}>
                    <img src={item.img} alt="image" />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <p className={styles.cardTitle}>{item.title}</p>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                    <button>
                      <img src="./programAssets/arrowWhite.png" alt="image" />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Experts