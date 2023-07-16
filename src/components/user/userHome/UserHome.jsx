import React from 'react'
import './userHome.css'
import { useNavigate } from 'react-router-dom'

function UserHome() {

  let navigate = useNavigate()
  return (


<div className="banner" style="position: relative;">
  <img src="/image/TURF3.jpg" alt="Turf Booking Banner" className="w-full h-auto object-cover" />
  <div className="button-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <button onClick={() => navigate('/book')} className="px-8 py-4 bg-green-500 text-white rounded-full cursor-pointer text-base outline-none">Book Your Slot</button>
    <button onClick={() => navigate('/partnersignup')} className="px-8 py-4 bg-gray-200 text-black rounded-full cursor-pointer text-base outline-none">Partner with Us</button>
  </div>
  <div className="login-button-container">
    <button onClick={() => navigate('/login')} className="px-8 py-4 bg-gray-200 text-black rounded-full cursor-pointer text-base outline-none">Login here</button>
  </div>
  <h1 className="text-4xl font-bold">Hello, I am home</h1>
</div>



  
  )
}

export default UserHome




{/* <div className="banner">
  <img src="/image/TURF3.jpg" alt="Turf Booking Banner" />

  <div className="search-bar">
    <input type="text" id="location-input" placeholder="Enter location" />
    <button type="submit">Search</button>
  </div>




  <div className="login-button-container">
    <button onClick={() => navigate('/login')}>Login here</button>
  </div>

  <h1>Hello, I am home</h1>
</div> */}







{/* <div className="banner">
  <img src="/image/TURF3.jpg" alt="Turf Booking Banner" className="w-full h-auto object-cover" />
  <div className="search-bar absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
    <input type="text" id="location-input" placeholder="Enter location" className="px-14 py-4 w-96 border-none rounded-full mr-[-10px] text-base outline-none" />
    <button type="submit" className="px-8 py-4 bg-green-500 text-white rounded-full cursor-pointer text-base outline-none">Search</button>
  </div>


  <div className="login-button-container">
    <button onClick={() => navigate('/login')} className="px-8 py-4 bg-gray-200 text-black rounded-full cursor-pointer text-base outline-none">Login here</button>
  </div>
  <h1 className="text-4xl  font-bold">Hello, I am home</h1>
</div> */}