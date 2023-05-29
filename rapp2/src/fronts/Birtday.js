import React, { useState } from "react";
import "../css's/birthday.css";
import Img from "../myimgs/background.jpg";
// import {Link} from "react-router-dom"

export default function Birthday(props) {
  const bday=()=>{
    if(props.bday_available===0)
      return(false)
    else
      return(true)
  }

  return (
    <div id="bday" className="b_party">
      <img src={Img} alt="A birthday image" className="b_img" />
      <div>
        <h2>Book&nbsp;Birthday&nbsp;Party</h2>
        <p>Lets Celebrate your Birthday with a grand Party</p>
        <p>Just tell us what you want the Party be like and we organize it.</p>
        {bday && <p>Booking&nbsp;Availability:&nbsp; Available</p>}
        <a href="#contactus">Book&nbsp;Birthday</a>
      </div>
    </div>
  );
}
