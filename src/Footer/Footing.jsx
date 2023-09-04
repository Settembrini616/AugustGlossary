import React from 'react';
import Star from './Star';



export default function Footing({children}){

    const [selectedStars, setSelectedStars] = React.useState(0);
    const createArray = length => Array(length).fill(null);


    return(
        <div className='footer'>
            <div className='footer-wrap'>
                    <section className='stars '>
                        <h6>Rate us: </h6>
                        <div>{createArray(5).map((n,i)=><Star
                         key={i} 
                        size="20px"
                        selected={selectedStars>i}
                        onSelect={()=> setSelectedStars(i+1)}
                        
                        /> )}
                        </div>
                        
                        </section>
                    <section  className='myself '>
                        <p>&copy; Ihor Polovyi</p>
                    </section>
            </div>
        
        </div>
    )


}