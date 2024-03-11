import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.webp"

export default function hard() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6 col-12'>
            <img src={image1} style={{height:"500px", width:"500px"}}></img>
            </div>

            <div className='col-md-6 col-12'>
                <img src={image2} style={{height:"300px", width:"500px"}}></img>
                <h1 style={{fontWeight:"bolder" , fontSize:"50px"}}>Sport Shoes</h1>
                <p style={{ fontSize:"30px"}}>UPTO 30% OFF FROM ALL STORE</p>
                <button className='btn btn-danger'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}
