import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link aria-label="Go to home page" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link aria-label="Go to About page" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link aria-label="Go to menu page" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link aria-label="Go to booking page" to="/bookingpage">
            Reservation
          </Link>
        </li>
        <li>
          <Link aria-label="Go to order page" to="/order">
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
