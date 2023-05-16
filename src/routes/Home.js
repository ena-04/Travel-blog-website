import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Trip from "../components/Trip";
import Pic1 from "../assets/beach.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

import Pic2 from "../assets/china.jpg";
import Pic3 from "../assets/contact.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <Blog />

      <About />

      <Trip />
      <Footer />
    </>
  );
}

export default Home;
