import React from "react";
import { Link } from "gatsby";
import oneClubLogo from "../images/logo-small.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={oneClubLogo} alt="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/awards">AWARDS</Link>
        </li>
        <li>
          <Link to="/programs">PROGRAMS</Link>
        </li>
        <li>
          <Link to="/events">EVENTS</Link>
        </li>
        <li>
          <Link to="/memberships">MEMBERSHIPS</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li>
          <Link to="/jobs">JOBS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
