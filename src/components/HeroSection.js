import React from 'react'
import {Button } from './Button';
import './HeroSection.css'; 
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
    {/* <video src='/videos/video-1.mp4'/> */}



    <h1>BECOME A CHAMPION</h1>
            <p>THERE'S A FIGTHER IN ALL OF US</p>
            
            <div className='hero-btns'>
                
                <Button to='/trailer'
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >OUR HISTORY <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
  )
}

export default HeroSection