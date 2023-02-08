import Reservation from "../component/Reservation";
import Specials from "../component/Specials";
import Ratings from "../component/Ratings";
import About from "../component/About";
import { useRef } from "react";

const Home = () => {
  const reservationRef = useRef(null);
  const specialsRef = useRef(null);
  const ratingsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="grid-container">
      <div className="reservation" ref={reservationRef}>
        <Reservation />
      </div>
      <div className="specials" ref={specialsRef}>
        <Specials />
      </div>
      <div className="ratings" ref={ratingsRef}>
        <Ratings />
      </div>
      <div className="about" ref={aboutRef}>
        <About />
      </div>
    </div>
  );
};

export default Home;
