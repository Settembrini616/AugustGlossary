import React from 'react';
import MainForm from '../../Custom Hooks/Forms/MainForm/MainForm';
import Trackbar from '../../Custom Hooks/Forms/Track Bar/Trackbar';



const Main = () => {
  return (
    <div className='main-main'>

<div className='main-container'>
   <section className='inner hero-image'> <h3><span>Days in</span></h3></section>
   <aside className='inner login-form'>  <MainForm/> </aside>
   <aside className='inner track-form'>Find us on social media:</aside>
   <aside className='inner bar'><Trackbar /></aside>
   <div className='inner bottom-cards'>Bottom cards</div>
   



    </div>

    </div>
    
);

    }


export default Main;