import React from "react";
import { Link } from "gatsby";
import oneClubLogo from "../images/logo-small.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const linkData = [
    { name: "AWARDS", linkTo: "/awards" },
    { name: "PROGRAMS", linkTo: "/programs" },
    { name: "EVENTS", linkTo: "/events" },
    { name: "MEMBERSHIPS", linkTo: "/memberships" },
    { name: "STORE", linkTo: "/store" },
    { name: "JOBS", linkTo: "/jobs" },
    { name: "ABOUT", linkTo: "/about" },
  ];

  const linkArray = linkData.map(entry => (
    <li key={entry.name}>
      <Link to={entry.linkTo}>{entry.name}</Link>
    </li>
  ));
  
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={oneClubLogo} alt="logo" />
      </Link>
      <ul>{linkArray}</ul>
    </nav>
  );
};

export default Navbar;
