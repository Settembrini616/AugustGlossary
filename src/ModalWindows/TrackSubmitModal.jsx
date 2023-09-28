import React from 'react';
import AppMainContext from '../Custom Hooks/AppMainContext';
import { useContext } from 'react';

import { Cross } from '../FontAwesome/FontAwesome';
import { useClose } from '../Custom Hooks/CustomHooks';

const TrackSubmitModal = () => {


    const { trackMainSubmitState, setTrackMainSubmitState} = 
    useContext(AppMainContext);

    const [isClosingSubmit, closeTheWindowSubmit] = 
    useClose(trackMainSubmitState, setTrackMainSubmitState);

    return (

        <div className={trackMainSubmitState 
         ? 'modal-open-submit' :
         'close-modal'}>

            <div className='blur-background-submit'></div>

            <div className={isClosingSubmit
            ? 'submit-inner-close' 
            : 'submit-inner-open' }>
                
        <section className='submit-main-inner-modal'>

            <Cross
            className='crossy'
            onClick={closeTheWindowSubmit}/> 

                <h4>Ruslan Budkobrad</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, in vero amet eum aliquid beatae earum sit dicta placeat, iure laudantium officiis dolore numquam dolores tempora dignissimos blanditiis doloremque exercitationem?
                Officiis accusantium dicta vitae illum error consectetur modi voluptatum esse debitis commodi aut harum praesentium nesciunt maxime, repellat distinctio dolores iste quos repudiandae, atque beatae rem cumque? Nemo, incidunt. Dolore?
                Atque, incidunt? Consectetur, ex quam! Natus cum consequuntur voluptatem optio vero modi dolores ab, doloremque, quo, excepturi nihil! Nulla tempore accusantium error eveniet mollitia quibusdam fugit nostrum deserunt qui magnam.</p>
        </section>
          
                
                </div>
        </div>
    );
}

export default TrackSubmitModal;
