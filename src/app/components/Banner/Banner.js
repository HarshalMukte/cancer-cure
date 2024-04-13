import styles from "./banner.module.css"
import Image from 'next/image'
import bannerPic from "../../../../public//banner.png"

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
      <Image 
      src={bannerPic}
      fill
      placeholder="blur"
      alt="Banner Picture"
      />
      </div>
       <div className={styles.content}>
       <h2>Home & Nursing <span>Care​​</span></h2>
       <p>Compassionate care for cancer patients, personalized for comfort and healing.</p>
       <button className={styles.contactBtn}>
          Learn more
      </button>
       </div>
    </div>
  )
}

export default Banner