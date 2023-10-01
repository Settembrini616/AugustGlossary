import React, {useState, useContext} from 'react';
import AppMainContext from '../Custom Hooks/AppMainContext';
import { useClose } from '../Custom Hooks/CustomHooks';
import { Cross } from '../FontAwesome/FontAwesome';


const QuestionMainModal = () => {

const { questionModal, setQuestionModal} =useContext(AppMainContext);
 
const [isClosingQuestion, closeTheWindowQuestion] = 
    useClose(questionModal, setQuestionModal);


    return(

        <div className={questionModal 
            ? 'modal-open-question'
            : 'close-modal'}>

        <div className='blur-background-question'></div>

        <div className={isClosingQuestion
                        ? 'question-inner-close'
                        : 'question-inner-open' }>
        <section className='question-main-inner-modal'>

            <Cross
            className='crossy'
            onClick={closeTheWindowQuestion}
            />

            <h4>What is this for?</h4>
            <p>This entire part of the website is to track your daily progress. 
                You can estimate what you've managed to accomplish on the scale from 
                0% to 100%. In the submit section you will be able to describe what tasks 
                you've accomplished in a given day. This can be very helpful as you're able to see
                what you're doing everyday and not lose motivation to study.
            </p>

        </section>


        </div>
            
        </div>
    );
}

export default QuestionMainModal;
