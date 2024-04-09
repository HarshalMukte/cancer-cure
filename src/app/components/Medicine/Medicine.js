"use client"
import Slider from "react-slick";
import styles from "./medicine.module.css"
// for carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Medicine = () => {

  const carousalData = [
    {
      id: 1,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
    {
      id: 2,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
    {
      id: 3,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
    {
      id: 4,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
    {
      id: 5,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
    {
      id: 6,
      title: "MediZen Resveratrol and Copper (Res+Cu) Tablets ",
      listData: ["Anti-cancer", "Side effect management", "Reduce recurrence risk"],
      imgLink: "/medicinesAssets/1.png"
    },
  ]


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, scale: "3", zIndex: "10" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,scale: "3", zIndex: "10"}}
        onClick={onClick}
      />
    );
  }


  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Cancer Specific Supplements​</h2> 
        <p>Strengthen your immune system and reduce side effects by meeting body’s nutritional needs​​</p>
      </div>
      <div className={styles.medicineMenu}>
        <ul className={styles.menuItmes}>
          <li className={`${styles.listItem} ${styles.active}`}>All</li>
          <li className={styles.listItem}>Daily Use supplements</li>
          <li className={styles.listItem}>Supplements</li>
          <li className={styles.listItem}>Ayurveda</li>
          <li className={styles.listItem}>Medical cannabis</li>
        </ul>
      </div>
      <div className={styles.medicineCarousel}>
      <Slider {...carouselSettings}>
        {
          carousalData.map((card, index) => (
            <div className={styles.card} key={card?.id || index}>
            <div className={styles.image}>
              <Image width={400} height={400} src={card.imgLink} alt="image" />
            </div>
            <div className={styles.title}>
              <h2>{card.title}</h2>
            </div>
            <ul className={styles.lists}>
             {
              card.listData.map((list, index) => (
                <li className={styles.list} key={index}>{list}</li>
              ))
             }
            </ul>
            <button className={styles.carouselBtn}>
              Buy now
            </button>
          </div>
          ))
        }
        </Slider>
      </div>
    </div>
  )
}

export default Medicine