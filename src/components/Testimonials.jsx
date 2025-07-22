import React from "react";
import TestimonialCards from "./TestimonialCards";
import './Testimonials.css'

export default function Testimonials(){
    return(
        <div className="testimonial_container">
<div className="test_parta">
<p className="para_start">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
<h1>Our Families</h1>
<p className="big_para">
    We will work with you to develop individualised care plans,<br /> including management of chronic diseases. If we cannot assist,<br />we can provide referrals or advice about the type of practitioner<br /> you require. We treat all enquiries sensitively and in the strictest<br /> confidence.
</p>
</div>
   <div className="test_cards">
    <TestimonialCards />
    </div>        
   
        </div>
    );
}