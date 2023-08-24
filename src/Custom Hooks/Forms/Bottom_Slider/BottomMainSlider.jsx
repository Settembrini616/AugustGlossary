import React from 'react';

import SliderCard from './SliderCard';

const cardsObject = [
    {
        title:'What Is It About?',
        icon: 'ICON',
        text:`This project provides a concise way to learn about React hooks.
         It covers useState for state management, useEffect for side effects, and more.
         With practical examples, users can quickly grasp the essence of hooks in React.`

    },
    {
        title:'Estimate your daily progress.',
        icon: 'ICON',
        text:`Tracking your daily progress in learning hooks is made effortless with this project. 
        Through organized modules, you can track your understanding of the state management.
         The provided exercises ensure hands-on experience for solidifying hook concepts effectively.`

    },
    {
        title:'Learn Context!',
        icon: 'ICON',
        text:`Dive into React's context feature, 
        aid in component communication across the app. It covers context providers, consumers, 
        and useContext hook, facilitating data sharing seamlessly. Master context to enhance your React skills.`

    },
    {
        title:'Create & Play',
        icon: 'ICON',
        text:`you can create and play with a wide array of components and features in React. 
        From building interactive user interfaces to handling data,
         React provides a versatile playground for crafting diverse applications.`

    },
    {
        title:'A library that persists',
        icon: 'ICON',
        text:`This is the project which has to serve as a reference database
        for multiple possible projects. In here you can store the code for various things you can apply anywhere!`

    },
    {
        title:'Enrich your life with React',
        icon: 'ICON',
        text:`The Glossary invites you to embark on a journey of discovery and growth.
         By delving into React's world, you unlock the power to create dynamic and engaging user interfaces.
          Whether you're a beginner or an experienced developer, this project will help you to create remarkable web applications.`

    },
    

]




const BottomMainSlider = () => {
    return (
        <div className='bottom-cards-wrap'>
            <SliderCard 
            title={cardsObject[1].title}
            ICON={cardsObject[1].icon}
            descr={cardsObject[1].text}
            
            />
        </div>
    );
}

export default BottomMainSlider;
