import React from "react";
import "./banner.css";

export default function banner() {
  return (
    <div style={{backgroundColor:"  rgb(247, 240, 240 )"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-12">
          <div style={{marginTop:"100px"}}>
          <span style={{fontSize:"30px" , color:"red"}}> 50% off on selected product</span> <br></br>
          <strong style={{fontSize:"40px" , fontWeight:"100px"}}>ALL ONLINE STORE</strong>
          <p>Offer available on shoes and produvt</p>
          <button className=" btns btn-danger">Shop Now</button>
        </div>
        </div>
          
       
        <div className=" col-md-7 col-12">
        <div>
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" style={{height:"400px" , width:"700px"}}></img>
        
        <div></div>
      </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}
