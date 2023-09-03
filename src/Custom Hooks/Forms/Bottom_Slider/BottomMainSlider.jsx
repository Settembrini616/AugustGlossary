import React from 'react';
import {v4 as uuidv4} from 'uuid';
import SliderCard from './SliderCard';
import { useState } from 'react';





const cardsArray = [
    {
        title:'What Is It About?',
        icon: 'https://img.icons8.com/color/48/code-folder.png',
        text:`This project provides a concise way to learn about React hooks.
         It covers useState for state management, useEffect for side effects, and more.
         With practical examples, users can quickly grasp the essence of hooks in React.`

    },
    {
        title:'Estimate',
        icon: 'https://img.icons8.com/color/96/php-designer.png',
        text:`Tracking your daily progress in learning hooks is made effortless with this project. 
        Through organized modules, you can track your understanding of the state management.
         The provided exercises ensure hands-on experience for solidifying hook concepts effectively.`

    },
    {
        title:'Learn Context!',
        icon: 'https://img.icons8.com/fluency/96/compare-git.png',
        text:`Dive into React's context feature, 
        aid in component communication across the app. It covers context providers, consumers, 
        and useContext hook, facilitating data sharing seamlessly. Master context to enhance your React skills.`

    },
    {
        title:'Create & Play',
        icon: 'https://img.icons8.com/color/96/code-blocks.png',
        text:`you can create and play with a wide array of components and features in React. 
        From building interactive user interfaces to handling data,
         React provides a versatile playground for crafting diverse applications.`

    },
    {
        title:'A library that persists',
        icon: 'https://img.icons8.com/color/96/book-shelf.png',
        text:`This is the project which has to serve as a reference database
        for multiple possible projects. In here you can store the code for various things you can apply anywhere!`

    },
    {
        title:'Enrich your life',
        icon: 'https://img.icons8.com/fluency/96/the-sims.png',
        text:`The Glossary invites you to embark on a journey of discovery and growth.
         By delving into React's world, you unlock the power to create dynamic and engaging user interfaces.
          Whether you're a beginner or an experienced developer, this project will help you to create remarkable web applications.`

    },
    

]




const BottomMainSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) =>{
        if(newIndex <0){
            newIndex=0;
        } else if(newIndex > 1){
            newIndex = 1
        }

        return setActiveIndex(newIndex);
    }


    const handleTransform = (e) =>{
        e.preventDefault(); 

        if(activeIndex === 0){
            updateIndex(activeIndex +1)
        }else{
             updateIndex(activeIndex -1)
        }

        return activeIndex;

    }

    return (
        <div className='bottom-cards-wrap'
            > 
        <div className='bottom-inside'
        style={{transform:`translate(-${activeIndex *100}%)`,
                transition:`transform 0.7s ease`}}>

        <div className='main-slide firsty'>
            {cardsArray.slice(0,3).map(card =>(
            <SliderCard 
            
            key= {uuidv4()}
            title={card.title}
            ICON={card.icon}
            descr={card.text}             />
          ))}
            </div>

            <div className='main-slide secondy'>
            {cardsArray.slice(3).map(card =>(
            <SliderCard 
    
            key= {uuidv4()}
            title={card.title}
            ICON={card.icon}
            descr={card.text}             />
          ))}
            </div>

        </div>

            
            <div className='arrows-slides'>
            <img width="20" height="20" className={activeIndex === 0 ? `turn-arrow` : 'bring-arrow-back'}

            onClick={handleTransform}
            src="https://img.icons8.com/office/16/gps-device.png"
             alt="gps-device"/>
          
            <img width="20" height="20" className={activeIndex === 0 ? `turn-arrow`: 'bring-arrow-back'}
             onClick={handleTransform}
            src="https://img.icons8.com/office/16/gps-device.png"
             alt="gps-device"/>
             </div>
          
        </div>
    );
}

export default BottomMainSlider;
