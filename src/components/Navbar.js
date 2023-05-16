import { Component } from "react";

import "./NavbarStyles.css";

import { MenuItems } from "./MenuItems";

// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Wanderlust</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            const scrollTold = `${item.title}-sec`;

            const handleClickNav = () => {
              document
                .getElementById(scrollTold)
                .scrollIntoView({ behavior: "smooth" });
            };

            return (
              <li key={index}>
                <button onClick={handleClickNav} className={item.cName}>
                  {" "}
                  <i className={item.icon}></i>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
