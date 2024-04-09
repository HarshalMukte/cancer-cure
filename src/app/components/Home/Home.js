import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftHome}>
        <div className={styles.content}>
        <h1>Empowering Cancer Journeys with Expert Guidance </h1>
        <p>Discover expert support and personalized solutions for your cancer journey with CancerCure. Our comprehensive services and dedicated team are here to empower you every step of the way.</p>
        <div className={styles.mailSection}>
          <input type="email" name="email" placeholder="Type your e-mail" className={styles.email}/>
          <button className={styles.mailBtn}>Get a coach</button>
        </div>
        </div>
          <div className={styles.languageBtn}>
            <img src="./homeAssets/world.svg" alt="image" />EN
          </div>
      </div>
      <div className={styles.rightHome}>
        <div className={styles.imageWrapper}>
          <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.imgWra}>
                <img src="./homeAssets/1.png" alt="image" />
                  <div className={styles.numbers}>
                    <p>10k+</p>
                  <span>Patients guided</span>
                  </div>
                </div>
                <div className={styles.imgWra}>
                <img src="./homeAssets/2.png" alt="image" />
                <div className={styles.numbers}>
                    <p>75%</p>
                  <span>Side Effects Reduced</span>
                  </div>
                </div>
                <div className={styles.circleEye}>
            <img src="./homeAssets/5.png" alt="image" />
          </div>
              </div>
              <div className={styles.right}>
                <img src="./homeAssets/3.png" alt="image" />
              </div>
          </div>
          <div className={styles.bottom}>
            <img src="./homeAssets/4.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home