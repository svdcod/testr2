import React from "react";
import { desert,milk } from "./SwnDeserts_data";

export default function SwNDeserts() {
  return (
    <div className="m_chinese">
      <h1>Deserts</h1>
      <div className="scroll_menu">
        <div>
          <h3><u>Milk&nbsp;Shakes</u></h3>
          <div>
            {Object.values(milk).map((mk,index)=>{return(<div key={index}>
              <hr></hr>
              <div>{mk.name}<p>Rs.{mk.price}/-</p></div>
            </div>);})}
          </div>
        </div>
        <div>
          <h3 style={{marginTop:"40px"}}><u>Deserts&nbsp;And&nbsp;Others</u></h3>
          <div>
            {Object.values(desert).map((de,index)=>{return(<div key={index}>
              <hr></hr>
              <div>{de.name}<p>Rs.{de.price}/-</p></div>
            </div>)})}
          </div>
        </div>
      </div>
    </div>
  );
}
