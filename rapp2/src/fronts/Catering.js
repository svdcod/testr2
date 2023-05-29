import React from "react";
import { ReactDOM } from "react";
import Img from "../myimgs/background.jpg";

export default function Catering(props) {
// console.log(props.ipdata.caters)

const cat=()=>{
  if(props.caters===0)
    return(false)
  else
    return(true)
}

  return (
    <div id="catering" className="b_party">
      <img src={Img} alt="Catering" className="b_img" />
      <div>
        <h2 className="hcater">Caterings</h2>
        <p className="cat_text">
          We provide one of the best catering services in the city you can find.
          <p>
            We specialize caterings for:
            <ul>
              <li>Kittyparty</li>
              <li>Birthday&nbsp;Party</li>
              <li>Wedding&nbsp;Engagement&nbsp;Functions</li>
              <li>Corporate&nbsp;Get-together</li>
              <li>And &nbsp;More...&nbsp;</li>
            </ul>
          </p>
        </p>
        {cat && <p>Catering&nbsp;Availability: &nbsp; Available</p>}
        <a href="#contactus">Request&nbsp;Caterings</a>
      </div>
    </div>
  );
}
