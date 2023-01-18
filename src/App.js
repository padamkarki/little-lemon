import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Reservation from "./Component/Reservation";
import Specials from "./Component/Specials";
import Ratings from "./Component/Ratings";
import About from "./Component/About";
import Footer from "./Component/Footer";

function App() {
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
}

export default App;
