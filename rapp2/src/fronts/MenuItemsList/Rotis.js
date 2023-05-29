import React from "react";
import { roti, parota } from "./Roti_data";

export default function Rotis() {
  return (
    <div className="m_chinese">
      <h1>Rotis</h1>
      <div className="scroll_menu">
        <div>
          <h2>
            <u>Roti</u>
          </h2>
          <div>
            {Object.values(roti).map((rt, index) => {
              return (
                <div key={index}>
                  <hr></hr>
                  <div>
                    {rt.name}
                    <p>Rs.{rt.price}/-</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ marginTop: "40px" }}>
            <u>Parotaa</u>
          </h3>
          <div>
            {Object.values(parota).map((pr, index) => {
              return (
                <div key={index}>
                  <hr></hr>
                  <div>
                    {pr.name}
                    <p>Rs.{pr.price}/-</p>
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
