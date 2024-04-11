import styles from "./banner.module.css"

const Banner = () => {
  return (
    <div className={styles.wrapper}>
       <h2>Home & Nursing <span>Care​​</span></h2>
       <p>Compassionate care for cancer patients, personalized for comfort and healing.</p>
       <button className={styles.contactBtn}>
          Learn more
      </button>
    </div>
  )
}

export default Banner