import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)


function Submit(){

    return(
        // Returning page format
        //Eventually try sweet alerts
        <article name="reviewPage">
            <h1>Review Your Feedback</h1>
            <p>Feelings: 5</p>
            <p>Understanding: 5</p>
            <p>Support: 5</p>
            <p>Comments: I love this stuff!</p>
            {/* sends data  */}
            <button>Submit</button>
        </article>
    )
};

export default Submit;