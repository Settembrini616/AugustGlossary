import React from 'react';
import {v4 as uuidv4} from 'uuid'

   const linkInfo = [
        {
            id:uuidv4(),
            icon: 'https://img.icons8.com/stickers/60/instagram-new--v2.png',
            link: 'https://www.instagram.com/polovyiihor_/'
        },
        {
            id:uuidv4(),
            icon: 'https://img.icons8.com/stickers/60/facebook.png',
            link: 'https://www.facebook.com/ihor.polovyi'
        },
        {
            id:uuidv4(),
            icon: 'https://img.icons8.com/stickers/60/linkedin.png',
            link: 'https://www.linkedin.com/in/ihor-polovyi-14145b28b/'
        },
        {
            id:uuidv4(),
            icon: 'https://img.icons8.com/stickers/60/vk-com.png',
            link: 'https://vk.com/id37330377'
        }
    ]


    const capitalize = (str) =>{

        return str.toLowerCase().split(' ').map((word)=>{
           
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ')
    }


const SocialMedia = () => {


    const h4ref = React.useRef(null);
    
 
    React.useEffect(()=>{
        if(h4ref.current){
            const text = h4ref.current.innerText;
            h4ref.current.innerText = capitalize(text);
        }
    })


    return (
        <div className='social-media-main'>
            <h4 ref={h4ref}> social media:</h4>
            <section>
                <div>  {linkInfo.slice(0,2).map(linkItem=>(<li key={linkItem.id}>
                    <a href={linkItem.link}
                    style={{
                        height:'60px',
                        width:'60px',
                        backgroundImage:`url(${linkItem.icon})`
                    }}
                    target='_blank'
                    rel='noopener noreferrer'
                    ></a>

                </li>))}</div>
                <div>  {linkInfo.slice(2).map(linkItem=>(<li key={linkItem.id}>
                    <a href={linkItem.link}
                    style={{
                        height:'60px',
                        width:'60px',
                        backgroundImage:`url(${linkItem.icon})`
                    }}
                    target='_blank'
                    rel='noopener noreferrer'
                    ></a>

                </li>))}</div>
              

            </section>
           
         
        </div>
    );
}

export default SocialMedia;

