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
        <div className='thankYouContainer'>
            <h1>Thank You</h1>
            <button className="leaveNewFeedback" onClick={onSubmit}>Leave New Feedback</button>
        </div>
    )
};


export default ThankYou;