import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)




function Submit(){
    //get redux state
    const feedback = useSelector(store => store.feedback)
    //check for data
    console.log('feedback', feedback);

    return(
        // Returning page format
        //Eventually try sweet alerts
        <article name="reviewPage">
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}.</p>
            {/* sends data  */}
            <button>Submit</button>
        </article>
    )
};

export default Submit;