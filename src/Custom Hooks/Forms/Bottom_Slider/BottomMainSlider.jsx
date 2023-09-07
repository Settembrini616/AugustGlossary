import React from 'react';
import {v4 as uuidv4} from 'uuid';
import SliderCard from './SliderCard';
import { useState } from 'react';





const cardsArray = [
    {
        title:'What Is It About?',
        icon: 'https://img.icons8.com/color/48/code-folder.png',
        text:`This project provides a concise way to learn about React hooks. It covers useState for state management, useEffect for side effects, and more.With practical examples, users can quickly grasp the essence of hooks in React.\nThis guide delves deeper into the nuances of React hooks, elucidating concepts like useContext for contextual data,useRef for referencing DOM elements, and useCallback to prevent unnecessary re-renders. By integrating real-world scenarios and hands-on exercises,learners can effortlessly understand and harness the power of hooks in their React applications.`

    },
    {
        title:'Estimate',
        icon: 'https://img.icons8.com/color/96/php-designer.png',
        text:`Tracking your daily progress in learning hooks is made effortless with this project. Through organized modules, you can track your understanding of the state management.The provided exercises ensure hands-on experience for solidifying hook concepts effectively. \nThis project also incorporates a robust knowledge tracking system, allowing users to monitor their proficiency over time. With intuitive dashboards and progress metrics, learners can easily identify their strengths and areas that require further attention. \nThe periodic review quizzes serve as checkpoints, ensuring that the knowledge acquired is not only retained but also applied effectively. This continuous feedback loop ensures a holistic and adaptive learning experience tailored to each user's unique journey.`

    },
    {
        title:'Learn Context!',
        icon: 'https://img.icons8.com/fluency/96/compare-git.png',
        text:`Dive into React's context feature, aid in component communication across the app. It covers context providers, consumers, and useContext hook, facilitating data sharing seamlessly. Master context to enhance your React skills. \nExplore the depth of React's context mechanism, a pivotal tool for propagating data throughout your application. \nThis comprehensive guide elucidates the intricate relationships between context creation, delivery, and consumption. By delving into patterns like higher-order components and render props, alongside the useContext hook, you'll be equipped to tackle complex state management scenarios. Embracing the full potential of context will undoubtedly elevate your React development prowess.`

    },
    {
        title:'Create & Play',
        icon: 'https://img.icons8.com/color/96/code-blocks.png',
        text:`You can create and play with a wide array of components and features in React. From building interactive user interfaces to handling data, React provides a versatile playground for crafting diverse applications. \nWithin the expansive ecosystem of React, developers are afforded the liberty to design and experiment with numerous components and functionalities. From devising dynamic user interactions to managing intricate data structures, React offers a multifaceted platform for developing a broad spectrum of applications. \nThe flexibility and adaptability of this framework foster innovation and encourage creative problem-solving.`

    },
    {
        title:'A library that persists',
        icon: 'https://img.icons8.com/color/96/book-shelf.png',
        text:`This is the project which has to serve as a reference database for multiple possible projects. In here you can store the code for various things you can apply anywhere! This repository acts as a comprehensive code library, designed to catalog and curate snippets and modules essential for a myriad  of applications. \n Within its confines, developers can archive and retrieve code fragments relevant for diverse use cases, making  it an invaluable asset for seamless integrations and implementations. Think of it as your personal codebook, always ready to provide solutions and inspirations for any project you embark upon.`

    },
    {
        title:'Enrich your life',
        icon: 'https://img.icons8.com/fluency/96/the-sims.png',
        text:`The Glossary invites you to embark on a journey of discovery and growth. By delving into React's world, you unlock the power to create dynamic and engaging user interfaces. Whether you're a beginner or an experienced developer, this project will help you to create remarkable web applications.\nThe Compendium welcomes you to navigate the vast ocean of React's capabilities. Venturing through its depths, you harness the potential to breathe life into interactive and captivating digital experiences. Catering to both novices and seasoned coders, this endeavor aims to be your beacon, guiding you towards crafting exceptional web platforms and fortifying your developer acumen.`

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
        <div className='bottom-cards-wrap'> 

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


             
        <div className='bottom-inside'
        style={{transform:`translate(-${activeIndex *100}%)`,
                transition:`transform 0.7s ease`}}>

        <div className='main-slide firsty'>
            {cardsArray.slice(0,3).map(card =>(
            <SliderCard 
            
            key= {uuidv4()}
            title={card.title}
            ICON={card.icon}>

                {card.text.split('\n').map(paragraph =>(
                    <p>{paragraph}</p>
                ))}
         
            </SliderCard>
          ))}
            </div>

            <div className='main-slide firsty'>
            {cardsArray.slice(3).map(card =>(
            <SliderCard 
            
            key= {uuidv4()}
            title={card.title}
            ICON={card.icon}>
                
                {card.text.split('\n').map(paragraph =>(
                    <p>{paragraph}</p>
                ))}
         

            </SliderCard>
          ))}
            </div>

        </div>

           
        </div>
    );
}

export default BottomMainSlider;