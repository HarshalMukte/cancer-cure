"use client"
import Image from "next/image";
import styles from "./about.module.css";
import Slider from "react-slick";
// for carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {
  const carousalData = [
    {
      id: 1,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/1.png"
    },
    {
      id: 2,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/2.png"
    },
    {
      id: 3,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/3.png"
    },
    {
      id: 4,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/1.png"
    },
    {
      id: 5,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/2.png"
    },
    {
      id: 6,
      drName: "Dr.Megan D. Stallion",
      specialize: "Surgical Oncologist",
      educations: "MBBS, MD, FRCS",
      experience: "42y Experience",
      imgLink: "/aboutAssets/3.png"
    },

  ];


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
    dots: false,
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
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
        <p>Strengthen your immune system and reduce side effects by meeting
          body’s nutritional needs​​</p>
      </div>
      <div className={styles.aboutCarousel}>
      <Slider {...carouselSettings}>
        {
          carousalData.map((card, index) => (
            <div className={styles.card} key={card?.id || index}>
            <div className={styles.image}>
              <Image width={400} height={400} src={card.imgLink} alt="image" />
            </div>
            <div className={styles.cardContent}>
              <h2>{card.drName}</h2>
              <p>{card.specialize}</p>
            </div>
            <div className={styles.details}>
              <div className={styles.educations}>
                <img src="/aboutAssets/education.svg" alt="image" />
                {card.educations}
              </div>
              <div className={styles.experiences}>
                <img src="/aboutAssets/experience.svg" alt="image" />
                {card.experience}
              </div>
            </div>
            <button className={styles.carouselBtn}>
              Buy now
            </button>
          </div>
          ))
        }
        </Slider>
      </div>
    </div>
  );
};

export default About;
