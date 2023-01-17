import Nav from "./Nav";

import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <Nav />
    </>
  );
};

export default Header;
