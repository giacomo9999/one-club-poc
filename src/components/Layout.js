import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.spacer10}></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
