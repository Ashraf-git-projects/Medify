import React from "react";
import mobile from "../assets/mobile_screen.png";
import g_play from "../assets/g_play.png";
import apple from "../assets/app_store.png";
import './Advertise.css'

export default function Advertise() {
  return (
    <div className="adv_container">
      <img src={mobile} className="mobile_img" alt="mobile_app"/>
      <div className="adv_texts">
        <h1>
          Download the <span>Medify</span> App
        </h1>
        <p>Get the Link to download the app</p>
        <form className="numb_form">
          <label title="+91" />
          <input type="number" />
        </form>
        <button className="sms_btn">Send SMS</button>
        <div className="app_imgs">
          <img src={g_play} alt="play store" />
          <img src={apple} alt="app store" />
        </div>
      </div>
    </div>
  );
}
