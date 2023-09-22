import React from 'react'
import Footer from '../Footer'
import '../trailer.css'


export default function Trailer () {
    return   (
        <>
       <div className="video-contain">
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/OHvZF9oP6Ic?autoplay=1"          title="YouTube video player"
          frameborder="0"
          allowfullscreen
          autoPlay
        ></iframe>
      </div>
   
        <Footer/>
        </>
    )
}