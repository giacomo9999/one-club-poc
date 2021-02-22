import React from "react";
import { Link } from "gatsby";
import oneClubLogo from "../images/logo-small.svg";
import styles from "./Navbar.module.scss";
console.log("Imported styles: ", styles);

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={oneClubLogo} alt="logo" />

      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link to="/">AWARDS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blog">PROGRAMS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products">EVENTS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products">MEMBERSHIPS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products">STORE</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products">JOBS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
