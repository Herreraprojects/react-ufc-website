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
                <Button to='/sign-up'
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button to='/trailer'
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
  )
}

export default HeroSection