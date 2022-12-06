import React from 'react'
import dp from "./images/dp1.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./about.css"

export default function About() {
  return (
     <div className='container-fluid'>
        <div className='row align-items-center'>
            <div className='col-md-5'>
                <img className='mt-5 ms-5 rounded-5' src={dp}></img>
            </div>
            <div className='col-md-6 text'>
            <h1>ABOUT ME</h1>
            <h2>The lower your expectations, the more content you will be.</h2>
            <p>At kcg college of technology, I am now pursuing my btech degree in information technology. I've always been fascinated by technology and how it makes everyone's life easier/better, which is why I chose to pursue this degree. My skills include being able to acquire information quickly and focusing on a single task. I have several interests, but I spend the majority of my time playing video games since it relaxes me and keeps me active.
            </p>
            </div>
        </div>
        </div>
  )
}
