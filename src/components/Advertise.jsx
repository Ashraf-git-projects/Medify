import React from "react";
import mobile from "../assets/mobile_screen.png";
import g_play from "../assets/g_play.png";
import apple from "../assets/app_store.png";
import mob_cover from "../assets/mb_cvr.png"
import './Advertise.css'

export default function Advertise() {
  return (
    <div className="adv_container">
      <img src={mobile} className="mobile_img" alt="mobile_app"/>
      <img src={mob_cover} className="mob_cover_img" alt="mobile_cvr"/>
      <div className="adv_texts">
        <h1>
          Download the <br /><span style={{color:"#2AA7FF"}}>Medify</span> App
        </h1>
        <p>Get the Link to download the app</p>
        <form className="numb_form">
         <div className="phone_input_wrapper">
    <span className="country_code">+91</span>
    <input type="number" placeholder="Enter phone number" />
  </div>
          <button className="sms_btn">Send SMS</button>
        </form>
        
        <div className="app_imgs">
          <img src={g_play} alt="play store" />
          <img src={apple} alt="app store" />
        </div>
      </div>
    </div>
  );
}
