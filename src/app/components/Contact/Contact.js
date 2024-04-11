import styles from "./contact.module.css"


const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
       <div className={styles.content}>
        <h2>Consult  an Oncology Expert</h2>
        <p>Improve your treatment & recovery with science-based integrative therapies​​</p>
      </div>
      <div className={styles.cardsCircle}>
        <div className={`${styles.circle} ${styles.smallCircle}`}>
          <img src="/contactAssets/1.png" alt="image" />
        </div>
        <div className={`${styles.circle} ${styles.left}`}>
          <img src="/contactAssets/2.png" alt="image" />
        </div>
        <div className={`${styles.circle} ${styles.middle}`}>
          <img src="/contactAssets/3.png" alt="image" />
        </div>
        <div className={`${styles.circle} ${styles.right}`}>
          <img src="/contactAssets/4.png" alt="image" />
        </div>
        <div className={`${styles.circle} ${styles.smallCircle}`}>
          <img src="/contactAssets/5.png" alt="image" />
        </div>
      </div>
      <button className={styles.contactBtn}>
          Learn more
      </button>
    </div>
  )
}

export default Contact