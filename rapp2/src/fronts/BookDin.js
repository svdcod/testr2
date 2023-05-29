import React from "react";
import Img from "../myimgs/background.jpg";
import "../css's/birthday.css"
export default function BookDin(props) {
  const seat=()=>{
    if(props.seats===0)
      return(false)
    else
      return(true)
  }

    console.log(props.seats)
  return (
    <div id="dinner" className="b_party">
        <img src={Img} alt="A dinner image" className="b_img" />
      <div>
        <h2>Dinner&nbsp;Booking</h2>
      <p>Book your seats for dinner. Contact us and get your seats booked</p>
      {seat && <p>Seats&nbsp;available:&nbsp;  Available</p>}
      <a href="#contactus">Go&nbsp;To&nbsp;Book</a>
      </div>
    </div>
  );
}
