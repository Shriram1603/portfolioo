import React from 'react'
import Typed from "react-typed"
import "./header.css"

function Header() {
  return (
    <div className='header-wraper'id='home'>
        <div className='main-info'>
           <h1> front-end noob</h1>
           <Typed
           className='typed-text'
           strings={["web design","web devolopment","Google ads","Facebook ads"]}
           typeSpeed={50}
           backSpeed={60}
           loop/>
           <a className='btn-main-offer'>contact me</a> 
        </div>
    </div>
  )
}
export default Header