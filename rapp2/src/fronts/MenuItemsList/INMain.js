import React from "react";
import kj from "./moreitems/kaju";
import pan from "./moreitems/paneer";
import veg from "./moreitems/veg";

export default function Indianmain() {
  return (
    <div className="Ind_starter">
      <h1>Main<br/>Course</h1>
      <div className="scroll_menu">
        <div>
          <h3><u>Paneer</u></h3>
          <div>
            {Object.values(pan).map((p, index) => {return(
              <div >
                <hr></hr>
                <div>
                  {p.name}
                  <p>Rs.{p.price}/-</p>
                </div>
              </div>);
            })}
          </div>
        </div>
        <div>
          <h3 style={{marginTop:"40px"}}><u>Veg</u></h3>
          <div>{Object.values(veg).map((v, index) => {return(
            <div key={index}>
            <hr></hr>
            <div>
              {v.name}
              <p>Rs.{v.price}/-</p>
            </div>
          </div>)
          })}</div>
        </div>
        <div>
          <h3 style={{marginTop:"40px"}}><u>Kaju</u></h3>
          <div>{Object.values(kj).map((k, index) => {return(
            <div key={index}>
            <hr></hr>
            <div>
              {k.name}
              <p>Rs.{k.price}/-</p>
            </div>
          </div>)
          })}</div>
        </div>
      </div>
    </div>
  );
}
