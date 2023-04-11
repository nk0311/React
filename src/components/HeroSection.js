import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom'

const NavigateToQuiz = () => {
  NavigateToQuiz('/quiz');
}

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Model Minority and the Perpetual Foreigner</h1>
      <p>Uncovering truths from myths</p>
      <div className='hero-btns'>
        <Link to='/model'>
        <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         
        >

          
        MODEL MINORITY VIDEO<i className='far fa-play-circle' />
        </Button>
        </Link>

        <Link to='/perpetual'>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        PERPETUAL FOREIGNER VIDEO <i className='far fa-play-circle' />
        </Button>
        </Link>

      </div>
    </div>
  );
}

export default HeroSection;
