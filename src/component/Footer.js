import restaurant_img from "../images/restaurant.jpg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.section}>
        <div className={styles.footer_space}>
          <div className={styles.footer_flex}>
            <div>
              <img
                className={styles.img}
                src={restaurant_img}
                alt="restaurant_img"
              />
            </div>
            <div>
              <h3>
                DOORMAT
                <br />
                NAVIGATION
              </h3>
              <ul>
                <li className={styles.links}>
                  <a href="/#">Home</a> <br />
                  <a href="/#">About</a> <br />
                  <a href="/#">Menu</a> <br />
                  <a href="/#">Reservation</a> <br />
                  <a href="/#">Order Online</a> <br />
                  <a href="/#">Login</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>CONTACTS</h3>
              <ul>
                <li className={styles.links}>
                  <a href="/#">Addrses</a>
                  <br />
                  <a href="/#">Phone Number</a>
                  <br />
                  <a href="/#">Email</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>SOCIAL MEDIA LINKS</h3>
              <ul>
                <li className={styles.links}>
                  <a href="/#">Addrses</a>
                  <br />
                  <a href="/#">Phone Number</a>
                  <br />
                  <a href="/#">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
