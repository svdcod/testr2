import React from "react";
import { chi_rice, in_rice } from "./INrice_data";

export default function Rice() {
  return (
    <div className="Ind_starter">
      <h1>Rice</h1>
      <div className="scroll_menu">
        <div>
          <h3>
            <u>Chinese</u>
          </h3>
          <div>
            {Object.values(chi_rice).map((cr, index) => {
              return (
                <div key={index}>
                  <hr></hr>
                  <div>
                    {cr.name}
                    <p>Rs.{cr.price}/-</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ marginTop: "40px" }}>
            <u>Indian</u>
          </h3>
          <div>
            {Object.values(in_rice).map((ir, index) => {
              return (
                <div key={index}>
                  <hr></hr>
                  <div>
                    {ir.name}
                    <p>Rs.{ir.price}/-</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
