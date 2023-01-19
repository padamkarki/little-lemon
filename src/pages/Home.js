import Header from "../component/Header";
import Nav from "../component/Nav";
import Reservation from "../component/Reservation";
import Specials from "../component/Specials";
import Ratings from "../component/Ratings";
import About from "../component/About";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="header-nav">
        <Header />
        <Nav />
      </div>
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
