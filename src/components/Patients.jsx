import React from "react";
import dial from "../assets/dial.png";
import pat_a from "../assets/pat_1.png";
import pat_b from "../assets/pat_2.png";
import './Patients.css'
import tick from '../assets/tick.png'


export default function Patients(){

    return(
    <div className="pat_content">
    <div className="img_part">
        <div className="popup_link" >
            <div className="p_flx">
         <img src={dial} alt="dialimg" />
            <h3>Free Consultation</h3>
            </div>
            <p>Consultation with the best</p>
        </div> <div className="pat_imga">
      <img src={pat_a} alt="pat_img" className="pat_img" />
      </div> <div className="pat_imgb">
      <img src={pat_b} alt="pat_img" className="pat_img"/>
      </div>
    </div>
    <div className="txt_part">
    <p className="para_1">HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
    <h1>Patient <span>Caring</span></h1>
    <p className="para_2">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
    <div className="h_points">
    <div className="hd_flx"><img src={tick} alt="tick" /><h5>Stay Updated About Your Health</h5></div>
        <div className="hd_flx"><img src={tick} alt="tick" /><h5>Check Your Results Online</h5></div>
    <div className="hd_flx"><img src={tick} alt="tick" /><h5>Manage Your Appointments</h5></div>
</div>
    </div>
    </div>);
}