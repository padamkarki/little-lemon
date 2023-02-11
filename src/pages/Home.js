import Reservation from "../component/Reservation";
import Specials from "../component/Specials";
import Ratings from "../component/Ratings";
import About from "../component/About";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="reservation">
        <Reservation />
      </div>
      <div className="specials">
        <Specials />
      </div>
      <div className="ratings">
        <Ratings />
      </div>
      <div className="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
