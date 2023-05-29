import React from "react";
import in_starter from "./INstarter_data";

export default function Indianstarters() {
  return (
    <div className="Ind_starter">
      <h1>Indian<br/>Starters</h1>
      <div className="scroll_menu">
        <div>
          <h2><u>Starters</u></h2>
          <div>
            {Object.values(in_starter).map((ins,index)=>{return(
              <div key={index}>
                <hr></hr>
                <div>{ins.name}<p>Rs.{ins.price}/-</p></div>
              </div>
            );})}
          </div>
        </div>
      </div>
    </div>
  );
}
