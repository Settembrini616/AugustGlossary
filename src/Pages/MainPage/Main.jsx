import React from 'react';
import MainForm from '../../Custom Hooks/Forms/MainForm/MainForm';
import Trackbar from '../../Custom Hooks/Forms/Track Bar/Trackbar';
import BottomMainSlider from '../../Custom Hooks/Forms/Bottom_Slider/BottomMainSlider';
import SocialMedia from './SocialMedia/SocialMedia';
import HeroImage from '../MainPage/HeroImage';



const Main = () => {
  return (
    <div className='main-main'>

<div className='main-container'>
   <HeroImage/>
   <aside className='inner login-form'>  <MainForm/> </aside>
   <aside className='inner track-form'>  <SocialMedia /> </aside>
   <aside className='inner bar'
    style={{
      backgroundColor:' rgb(253, 253, 253)'
    }}><Trackbar /></aside>
   <div className='inner bottom-cards'><BottomMainSlider /></div>
   



    </div>

    </div>
    
);

    }


export default Main;