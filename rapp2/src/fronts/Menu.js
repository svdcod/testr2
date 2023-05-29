import React, { useEffect } from "react";
import { ReactDOM } from "react";
import NavBar from "./NavBar";
import { useState, useNavigate } from "react";
import chidata from "./MenuItemsList/chistarter_data"
import thaldata from "./MenuItemsList/thali_data"
import "../css's/menu.css";
import Indianstarters from "./MenuItemsList/INStartsers";
import Soups from "./MenuItemsList/Soups";
import Indianmain from "./MenuItemsList/INMain";
import Rotis from "./MenuItemsList/Rotis";
import INRice from "./MenuItemsList/INRice";
import SwNDeserts from "./MenuItemsList/SwNDeserts";
import ContactUs from "./Contactus";


export default function Menu() {
  return (
    <div className="total_menu backg">
      <NavBar />
      <h1 className="menu_head">Menu</h1>
      <ul className="menu_lists">
        <li className="m_lunch">
          <h1>Lunch</h1>
          <div className="scroll_menu">
            <h2><u>Meals</u></h2>
            {Object.values(thaldata).map((t,index)=>{
              return(<div key={index}>
                <hr></hr>
                <div>
              {t.name}<p>Rs.{t.price}/-</p>
              <p>{t.time}</p>
              <p>{t.week_days}</p><br/>
            </div>
            </div>
              )
            })}
          </div>
        </li>
        <li className="m_chinese">
          <h1>Chinese<br/>Starters</h1>
          <div className="scroll_menu">
            <div>
              <h2><u>Starters</u></h2>
              <div className="chi-starter">
                {Object.values(chidata).map((d,index)=>{
              return(<div key={index}>
                <hr></hr>
                <div>{d.item}
                <p>Rs.{d.price}/-</p></div>
              </div>);
            })}
              </div>
            </div>
          </div>
        </li>
        <Indianstarters />
      </ul>
      <div className="menu_list2">
          <Soups />
          <Indianmain />
          <Rotis />
      </div>
      <div className="menu_list3">
          <INRice />
          <SwNDeserts />
      </div>
      <ContactUs/>
      <footer style={{backgroundColor:"	#A52A2A"}}>Copyright &copy; 2035 All rights reserved</footer>
    </div>
  );
}
