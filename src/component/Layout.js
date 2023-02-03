import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <div className={styles.header_nav}>
        <Header />
        <Nav />
      </div>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
