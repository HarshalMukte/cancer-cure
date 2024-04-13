import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Experts from "./components/Experts/Experts";
import Medicine from "./components/Medicine/Medicine";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";


export default function App() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.sections}>
        <section className={styles.section} id="home">
          {/* Home section content */}
          <Home />
        </section>

        <section className={styles.section} id="service">
          {/* Service section content */}
          <Service />
        </section>

        <section className={`${styles.section} ${styles.experts}`} id="experts">
          {/* Expert section content */}
          <Experts />
        </section>
        <section className={`${styles.section} ${styles.medicine}`} id="medicine">
          {/* Medicine section content */}
          <Medicine />
        </section>

        <section className={`${styles.section} ${styles.about}`} id="about">
          {/* About section content */}
          <About />
        </section>

        <section className={`${styles.section} ${styles.contact}`} id="contact">
          {/* Contact section content */}
          <Contact />
        </section>
        <section className={`${styles.section} ${styles.banner}`}>
          {/* Banner section content */}
          <Banner />
        </section>
        <section className={`${styles.section} ${styles.footer}`} >
          {/* Footer section content */}
          <Footer />
        </section>
      </div>
      <ScrollUp />
    </div>
  );
}
