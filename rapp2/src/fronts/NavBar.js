import React, { useState} from "react";
import I from "../myimgs/logo.png";
import "../css's/Nav.css";
import "../css's/drop_btn.css"

export default function NavBar() {
const [gate,setGate]=useState(false);
const cls=()=>setGate(!gate);


  const [click, setClick] = useState(false);
  const tgl=()=>setClick(!click);

  // const fun=()=>{try {
  //   document.getElementsByClassName('.nondrop').classList.toggle('.op')
  //   document.getElementsByClassName('.hname').classList.toggle('.rep_hname')
  // } catch (error) {
  //   console.log("error")
  // }
  // }

  return (
    <div className="burg">
    <nav className={gate? "hname":"hname rep_hname"}>
      <div className="hotel_container">
        <img src={I} className="hotel_logo" alt="HotelLogo"></img>
        <h1 className="retor">Hotel ShivSagar</h1>
      </div>
      <ul className={gate? "nondrop":"nondrop op"}>
        <li  className="home">
          <a href="/">
            Home
          </a>
        </li>
        <li  className="contactus">
          <a href="#contactus">
            ContactUs
          </a>
        </li>
        <li  className="menu">
          <a href="/menu">
            Menu
          </a>
        </li>
        <li className="location">
          <a  href="https://www.google.co.in/maps/place/Shiv+Sagar+Hotel/@15.4192799,74.9799564,12.64z/data=!4m13!1m7!3m6!1s0x3bb8d2a0e23a4319:0x6d6256f2c18f5014!2sShiv+Sagar+Hotel!8m2!3d15.4487023!4d74.9869073!10e5!3m4!1s0x3bb8d2a0e23a4319:0x6d6256f2c18f5014!8m2!3d15.4487023!4d74.9869073">
            Our&nbsp;Location
          </a>
        </li>
        <li className={gate? "service_menu":"service_menu op"}>
          <div id="drop_btn"  className="re_drop" onClick={tgl} >Services</div>
            <div onClick={tgl} id="drop_content" className={click ? "hide clicked" : "show"}>
            <a href="#bday">Birthday&nbsp;Party</a>
            <a href="#catering">Catering</a>
            <a href="#dinner">Book&nbsp;Dinner</a>
            <a href="#takeaway">Takeaway</a>
            </div>
        </li>
      </ul>
      <div className="burg_cont" >
          <div className="burger" onClick={cls}>
            <div className="line" onClick={cls}></div>
            <div className="line" onClick={cls}></div>
            <div className="line" onClick={cls}></div>
          </div>
        </div>
    </nav>
    </div>
  );
}
