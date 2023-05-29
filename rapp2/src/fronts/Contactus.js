import React from "react";
import emailjs from "emailjs-com"
import {useLocation} from "react-router-dom"
import "../css's/contact.css"

export default function ContactUs() {


  function send(e){
  e.preventDefault();
  emailjs.sendForm('service_ni22s04','template_otmsqlq',e.target,'9eNphRGEXtLuT17Rp').then((result)=>{
    window.location.reload()},
    (error)=>{console.log("Error")}
  );
}

  return (
    <div id="contactus" className="contact_us" onSubmit={send}>
        <h2 className="menu_head">Contact Us</h2>
<form className="contacting resp-contacting">
  <label>Email:</label>
  <input type="text" className="email_id" name="from_name" placeholder="Your Email ID"></input>
  <label>Name:</label>
  <input type="text" className="send_name" name="sender" placeholder="Your Name"></input>
  <label>Service Requests:</label>
  <input type="text" className="serv_req" name="requests" placeholder="Service Requested"></input>
  <label>Phone:</label>
  <input type="text" className="phone_serv" name="phone" placeholder="Phone number"></input>
  <label>Description</label>
  <textarea type="text" className="description" name="message" placeholder="     Tell us your details for the service request"></textarea>
  <input type="submit" className="contact_btn"></input>
</form>
    </div>
  );
}