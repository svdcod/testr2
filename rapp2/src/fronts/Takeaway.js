import React from "react";
import Img from "../myimgs/background.jpg";
import "../css's/birthday.css";
export default function Takeaway() {
  return (
    <div id="takeaway" className="b_party">
      <img src={Img} alt="A takeaway image" className="b_img" />
      <div>
        <h2>Takeaway</h2>
        <p>Takeaway orders are available.</p>
        <p>We are also available on many of the food delivery services</p>
        <p>Enjoy Your food</p>
        <a href="#contactus">Order&nbsp;Takeaway</a>
      </div>
    </div>
  );
}
