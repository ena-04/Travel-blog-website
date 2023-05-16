import "./TripStyles.css";
import Trip1 from "../assets/nz.jpg";
import Trip2 from "../assets/japan.jpg";
import Trip3 from "../assets/thai.jpg";
import Trip4 from "../assets/iceland.jpg";
import Trip5 from "../assets/spain.jpg";
import Trip6 from "../assets/egypt.jpg";
import Hero from "./Hero";
import Pic3 from "../assets/contact.jpg";

function Trip() {
  return (
    <>
      <section id="Trips-sec">
        <Hero
          heroImg={Pic3}
          cName="sec2"
          title="Recent Trips"
          text=""
          btnText=""
          url="/"
          btnName="hero-btn2"
        />
      </section>

      <h1 className="triptitle">
        Check out the places I had recently been to.
      </h1>
      <div className="trip">
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip1}></img>
              <h2>New Zealand</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                New Zealand is a wonderful country for a road trip, especially
                on the mostly rural South Island, where they have more sheep
                than people. This country has two main islands, and both are
                worth visiting. The North Island has great beaches, volcanoes,
                and green farmlands, while the South Island has glaciers,
                fjords, rain forests, and arguably the best road tripping
                conditions and overall scenery.
              </p>
            </div>
          </div>
        </div>
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip2}></img>
              <h2>Japan</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                Japan is an amazing combination of old and new, modern and
                traditional. You can ride a futuristic bullet train through the
                city, and visit a medieval Samurai castle in the same day. There
                is a huge variety of cultural attractions here, both old and
                new. We love traveling in Japan. The transportation is
                efficient, the people are polite, and the toilets are
                computerized.
              </p>
            </div>
          </div>
        </div>
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip3}></img>
              <h2>Thailand</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                Thailand has a huge variety of interesting things to do. Places
                in the Andaman Sea like Phuket, Krabi, and the Phi Phi islands
                are great for island hopping and boat tours, while cities like
                Bangkok and Chiang Mai have some amazing cuisine to try and
                traditional style Buddhist temples to see.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="trip">
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip4}></img>
              <h2>Iceland</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                Iceland is the land of fire and ice. It's a country of extreme
                landscapes and incredible beauty. How many places in the world
                can you walk on a glacier and see a volcano in the same day? One
                of the main reasons tourists come to Iceland is to see the
                waterfalls; this country has some of the best waterfalls in the
                world, not just in terms of size but also uniqueness.
              </p>
            </div>
          </div>
        </div>
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip5}></img>
              <h2>Spain</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                Spain has a little bit of everything: mountains, city life,
                architecture, cuisine, coastlines, culture, history, and more.
                Northern Spain is known for the cathedrals of Barcelona, and you
                can get a healthy dose of hiking and scenery in the mountains at
                Montserrat National Park.
              </p>
            </div>
          </div>
        </div>
        <div className="tripcard">
          <div className="tripcard-inner">
            <div className="tripcard-front">
              <img className="tripimg" alt="img" src={Trip6}></img>
              <h2>Egypt</h2>
            </div>
            <div className="tripcard-back">
              <p className="tripdesc">
                Egypt is full of 'bucket list' experiences. The most famous of
                these would easily be the Great Pyramids of Giza near the
                capital city of Cairo. Top sights in my opinion
                would have to include the archaeological museums and temples of
                Luxor, and the incredible pharaoh statues and ancient tombs at
                Abu Simbel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trip;
