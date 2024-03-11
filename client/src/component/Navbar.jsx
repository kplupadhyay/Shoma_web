import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
   <header>
    <input type='checkbox' name='' id="chk1"></input>

   <div className='logo'><h1>Shoma</h1></div>
            <div className='search-box'>
                <form action=''>
                    <input type='text' name="search" id="srch" placeholder='search'/>
                        <button type="submit"><i className="fa-solid fa-magnifying-glass-location"></i></button>
                    
                </form>
            </div>
            
        
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Category</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
                <li>
                    <i className=" cart fa-solid fa-cart-shopping"></i>
                    <i className=" heart fa-solid fa-heart"></i>
                    
                </li>
            </ul>
            <div className='menu'>
            <label  className='icon' htmlFor="chk1">
                    {/* <i className='fa-fa-bars'></i> */}
                    {/* <p style={{cursor:"pointer"}}>😊</p> */}
                    <i className="fa-solid fa-bars"></i>
            </label>
            </div>
            

   </header>
            
    </div>
  )
}
