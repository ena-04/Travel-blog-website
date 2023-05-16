import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/11.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import "./BlogStyles.css";
import Pic1 from "../assets/beach.jpg";
import Hero from "../components/Hero";

const Destination = () => {
  return (
    <section id="Home-sec">
      <Hero
        cName="landing"
        heroImg={Pic1}
        title="EXPLORE. DREAM. DISCOVER."
        text="This is a world travel blog featuring beautiful destinations and new experiences, all around the world."
        btnText="START EXPLORING"
        heroUrl="hero-url"
        url="/"
      />
      <div id="dest-sec" className="dest">
        <h1 className="blogTitle">MY BLOGS</h1>
        <div className="destination">
          <div className="destText">
            <h1>Things To Do In Santorini Island</h1>
            <p>
              The little island of Santorini Greece is famous for its photogenic
              old white-and-blue buildings, beautiful high end hotels with
              infinity pools, and sweeping views of the ocean. Santorini island
              is almost synonymous with luxury nowadays, but it’s also possible
              to travel Santorini on a budget, and many of the best things to do
              in Santorini are free, such as strolling the historic towns,
              taking pictures, relaxing on the beach, and seeing the sunset. A
              trip to the Greek islands wouldn’t be complete without seeing
              Santorini for at least a few days, and it’s easier than ever to
              get there from Athens and other major cities in Europe.
            </p>
          </div>
          <div className="destImgs">
            <img className="img1" alt="img" src={Pic2}></img>
            <img className="img2" alt="img" src={Pic3}></img>
          </div>
        </div>

        <div className="destination">
          <div className="destImgs">
            <img className="img1" alt="img" src={Mountain3}></img>
            <img className="img2" alt="img" src={Mountain4}></img>
          </div>
          <div className="destText">
            <h1>Sunrise Trekking Volcano In Bali</h1>
            <p>
              The Mount Batur hike in Kintamani, Bali is one of the most popular
              and enjoyable sunrise trekking experiences you can have in
              Indonesia. It’s not very hard to do the Mount Batur Bali trek from
              any part of the island, and the guided trek takes you up a still
              active volcano — Gunung Batur — with a summit elevation of more
              than 1,700 meters. Mount Batur sunrise trekking is especially
              popular because you can catch amazing views of the sunrise from
              the top of the mountain, usually in a sea of orange clouds. Sunset
              trekking can also be interesting if you don’t like the idea of
              waking up early. I’ve done this Bali volcano hike many times over
              the years, and the Mt Batur trek is always a completely memorable
              adventure in its own way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
