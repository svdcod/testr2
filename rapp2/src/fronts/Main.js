import React from "react";
import ContactUs from "./Contactus";
import NavBar from "./NavBar";
import "../css's/Main.css"
import Content from "./content";
import Aboutus from "./About";

export default function MainP() {
  return (<div id="home" className="home_page background">
  <NavBar/>
  <Content/>
  <div className="details">
  <Aboutus/>
  <ContactUs/>
  </div>
  <footer style={{backgroundColor:"	#A52A2A"}}>Copyright &copy; 2035 All rights reserved</footer>
  </div>);
}
