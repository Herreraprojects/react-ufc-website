import React from 'react'
import Footer from '../Footer'
import '../products.css'


export default function Products () {
    return   (
        <>
       <div className="video-container">
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/h7STg0LeWko?si=6KipMlKQDpb-yPVO" title="YouTube video player"
          frameborder="0"
          allowfullscreen
          autoPlay
        ></iframe>
      </div>
   
        <Footer/>
        </>
    )
}