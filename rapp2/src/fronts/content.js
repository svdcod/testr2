import React from "react";
import "../css's/content.css";
import Birthday from "./Birtday";
import Catering from "./Catering";
import BookDin from "./BookDin";
import Takeaway from "./Takeaway";
import data from "./data";
export default function Content() {

  
  return (
    <div className="content_container">
      <h1 style={{color:"	#B22222"}}>   Welcome to ShivSagar</h1>
      <h4 style={{color:"	#B22222"}}>
        <h5>Pure Veg and Freshly pepared food</h5>
        <h5>From Break Fast to dinner</h5> 
        <h5>Our food is fresh and tasty , hot ,sour, sweet, chinese, Tandoori, many dishes</h5>
       <h5> Serving fresh and tasty takes time, but we assure you wont be waiting for long durations </h5>
       <h5> We provide catering services also from kitty parties to Marriage And Engaement Funcitons</h5>
      </h4>
      <ul>
  <li className="birth_day">
    <Birthday {...data} />
  </li>
  <li className="cater">
    <Catering {...data} />
  </li>
  <li className="dinner">
    <BookDin {...data} />
  </li>
  <li className="take">
    <Takeaway />
  </li></ul>
    </div>
  );
}
