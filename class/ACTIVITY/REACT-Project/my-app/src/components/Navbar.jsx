import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>SMS</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/students" style={styles.link}>Students</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#333",
    color: "white",
  },
  link: {
    color: "white",
    margin: "10px",
    textDecoration: "none",
  },
};

export default Navbar;