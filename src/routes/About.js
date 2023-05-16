import Hero from "../components/Hero";
import "./AboutStyles.css";
import Pic2 from "../assets/china.jpg";

function About() {
  return (
    <section id="About-sec">
      <Hero
        cName="sec2"
        heroImg={Pic2}
        title="About"
        text=""
        btnText=""
        url="/"
        btnName="hero-btn2"
      />
      <div id="about-sec" className="about">
        <h1 className="abttitle">ABOUT ME</h1>
        <p>
          Thanks for looking! I'm Ena, and this is my travel blog. I'm a world
          traveller from a town in India. I first fell in love with travel and
          the outdoors during a 2015 hiking trip to the rocky mountains in
          Colorado with my friends. It hasn't always been easy, but over the
          years I've been blessed with some amazing experiences like sleeping in
          jungle treehouses in Bali, trekking to Mount Everest Base Camp in the
          Himalayas, going on Komodo dragon safaris in Indonesia, dining on
          tarantulas and scorpions in Cambodia, riding a camel to the Great
          Pyramids of Giza in Egypt, skydiving in Oahu Hawaii, touring medieval
          Samurai castles in Japan, and visiting some timeless world monuments
          like the Taj Mahal, Tikal, Machu Picchu, Hagia Sophia, Angkor Wat, and
          Petra. I haven't been everywhere, but it's on my list! I'm always
          looking for new adventures. I hope my travel blog can help and inspire
          you in your own journeys as well!
        </p>
      </div>
    </section>
  );
}

export default About;
