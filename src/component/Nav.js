import { Link } from "react-router-dom";
import { useRef } from "react";

const Nav = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const reservationRef = useRef(null);
  const specialsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <nav>
      <ul>
        <li>
          <Link
            aria-label="Go to home page"
            to="/"
            onClick={() => scrollToRef(reservationRef)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to About page"
            to="/about"
            onClick={() => scrollToRef(aboutRef)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to menu page"
            to="/menu"
            onClick={() => scrollToRef(specialsRef)}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to booking page"
            to="/bookingpage"
            onClick={() => scrollToRef(reservationRef)}
          >
            Reservation
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to order page"
            to="/order"
            onClick={() => scrollToRef(specialsRef)}
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link aria-label="Go to login page" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
