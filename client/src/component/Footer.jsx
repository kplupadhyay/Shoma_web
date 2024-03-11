import React from 'react';
import "./footer.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='mt-5 '>
        <div className=" info  mb-2 bg-dark text-white">
        <div className='container p-5'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <h2>Shome</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur veni</p>
                    <FaFacebook size={32} color="white" />

{/* LinkedIn Icon */}
<FaLinkedin size={32} color="white" />

{/* Instagram Icon */}
<FaInstagram size={32} color="white" />

{/* GitHub Icon */}
<FaGithub size={32} color="white" />
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <h2>Services</h2>
                <p>Home Monitoring</p>
                <p>Air Filters</p>
                <p>Professional Installation</p>
                <p>Smart building</p>
                <p>For contractpr</p>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <h2>My account</h2>
                <p>Account</p>
                <p>Contact</p>
                <p>Shopping Cart</p>
                <p>Login info</p>
                
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <h2>Contact Info</h2>
                <p>99999990</p>
                <p>kihgb@gmail.com</p>
                <p>www.google.com</p>
                
                
                </div>
            </div>
        </div>
    </div>

    <div style={{backgroundColor: " rgb(0, 0, 0)"}}>
        <div  style={{marginTop:"-10px"}}className='container '>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <p className='text-white'>Made with love by kapil Upadhyay💓</p>
                </div>
                {/* <div className='col-md-6 col-12'>
                    
                </div> */}
            </div>
        </div>
    </div>
    </div>
    
  )
}
