import React from "react";
import { Link } from "gatsby";
import oneClubLogo from "../images/logo-small.svg";
import styles from "./Navbar.module.css";
console.log("Imported styles: ", styles);

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={oneClubLogo} alt="logo" />
      <ul className={styles.navlinks}>
        <li className={styles.navitem}>
          <Link to="/">AWARDS</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/blog">PROGRAMS</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/products">EVENTS</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/products">MEMBERSHIPS</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/products">STORE</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/products">JOBS</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/products">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <nav class="navbar">
    <a href="https://freecodecamp.org" class="logo">
      <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="freeCodeCamp logo">
    </a>
    <ul class="nav-links">
      <li class="nav-item"><a href="#">Curriculum</a></li>
      <li class="nav-item"><a href="#">Forum</a></li>
      <li class="nav-item"><a href="#">News</a></li>
      <li class="nav-item"><a href="#">Sign in</a></li>
    </ul>
  </nav> */
}
