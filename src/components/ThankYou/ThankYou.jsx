import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";

// on submit (history.push), empty redux in case of error.

function ThankYou(){
    //setup history/dispatch
    const history=useHistory();
    const dispatch=useDispatch();

    function onSubmit(){
        console.log('in onSubmit');
        //reset state
        dispatch({
            type: 'RESET',
            payload:{}
        });

    history.push('/');
        
    }


    return (
        <article className="feedbackContainer">
            <div className='thankYouContainer'>
                <h1>Thank You For Your Feedback!</h1>
                <button id="leaveNewFeedback" onClick={onSubmit}>Leave New Feedback</button>
            </div>
        </article>
    )
};


export default ThankYou;