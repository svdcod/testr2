import React from "react";
import Img from "../myimgs/about_img.png";
import "../css's/contact.css"
export default function Aboutus() {

  return (
    <div id="abt" className="aboutus">
      <h1 className="menu_head">About Us</h1>
      <div className="abtBody">
        <img src={Img} alt="About Hotel" className="about_img"/>
        <div>
      <p>ShivSagar  was  Launched  in  2019,  with  many  dishes  and  cusines,  from  break  fast
       to  dinner  service.</p>
      <p>We also provide catering services, have been successfully delivering services.</p>
      <p>We prepare Fresh,Tasty and good food</p>
      </div>
      </div>
    </div>
  );
}
