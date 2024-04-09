import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Experts from "./components/Experts/Experts";
import Medicine from "./components/Medicine/Medicine";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.sections}>
        <section id="home">
          {/* Home section content */}
          <Home />
        </section>

        <section id="service">
          {/* Service section content */}
          <Service />
        </section>

        <section id="experts">
          {/* Expert section content */}
          <Experts />
        </section>
        <section id="medicine">
          {/* Medicine section content */}
          <Medicine />
        </section>

        <section id="about">
          {/* About section content */}
          <About />
        </section>

        <section id="contact">
          {/* Contact section content */}
          <Contact />
        </section>
      </div>
    </div>
  );
}
