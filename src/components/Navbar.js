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
          <Link to="/awards">AWARDS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/programs">PROGRAMS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/events">EVENTS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/memberships">MEMBERSHIPS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/store">STORE</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/jobs">JOBS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
