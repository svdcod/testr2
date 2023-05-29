import React from "react";
import { ReactDOM } from "react";
import soup from "./soup_data";

export default function Soups() {
  return (
    <div className="soup">
      <h2>Soups</h2>
      <div className="scroll_menu">
        <h2><u>Served&nbsp;soups</u></h2>
        {Object.values(soup).map((s, index) => {
          return (
            <div key={index}>
              <hr></hr>
              <div>
                {s.name}
                <p>Rs.{s.price}/-</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
