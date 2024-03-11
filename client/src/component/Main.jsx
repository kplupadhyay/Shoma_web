// import React from 'react'

// export default function Main() {
//   return (
//     <div>
//       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active" data-bs-interval="10000">
//       {/* <img src="..." className="d-block w-100" alt="..."> */}
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-12 mt-5">
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
//             <p style={{fontSize:"50px"}}>Always a step ahead</p>
//             <button className=' btn btn-danger'>Shop Now </button>
//           </div>
//           <div className="col-md-6 col-12">
//             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"400px",width:"500px"}}></img>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="carousel-item" data-bs-interval="2000">
//       {/* <img src="..." className="d-block w-100" alt="..."/> */}
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-12 mt-5">
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
//             <p style={{fontSize:"50px"}}>Always a step ahead</p>
//             <button className=' btn btn-danger'>Shop Now </button>
//           </div>
//           <div className="col-md-6 col-12">
//             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"400px",width:"500px"}}></img>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="carousel-item">
//       {/* <img src="..." className="d-block w-100" alt="..."/>
//        */}
//<div className="container">
//         <div className="row">
//           <div c          lassName="col-md-6 col-12 mt-5">
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
//             <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
//             <p style={{fontSize:"50px"}}>Always a step ahead</p>
//             <button className=' btn btn-danger'>Shop Now </button>
//           </div>
//           <div className="col-md-6 col-12">
//             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"400px",width:"500px"}}></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }

import React from 'react'
import "./Main.css";

export default function Main() {
  return (
    <div style={{backgroundColor:"rgb(52, 52, 242)"}}>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src="..." className="d-block w-100" alt="..."> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
          <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
           <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
             <p style={{fontSize:"50px"}}>Always a step ahead</p>
            <button className=' btn btn-danger'>Shop Now </button>
          </div>
          <div className="col-md-6 col-12">
          <img  className="translate" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"500px",width:"500px"}}></img>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/* <img src="..." className="d-block w-100" alt="..."> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
          <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
           <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
             <p style={{fontSize:"50px"}}>Always a step ahead</p>
            <button className=' btn btn-danger'>Shop Now </button>
          </div>
          <div className="col-md-6 col-12">
          <img  className="translate"src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"500px",width:"500px"}}></img>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/* <img src="..." className="d-block w-100" alt="..."> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
          <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>EXCLUSIVE </p>
           <p style={{fontSize:"70px" ,fontWeight:"bolder"}}>NEW SHOP</p>
             <p style={{fontSize:"50px"}}>Always a step ahead</p>
            <button className=' btn btn-danger'>Shop Now </button>
          </div>
          <div className="col-md-6 col-12">
          <img   className="translate"src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" style={{height:"500px",width:"500px"}}></img>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev text-success" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
