import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";

// on submit (history.push){POST route}

function ThankYou(){
    // import useHistory
    
    return (
        <>
            <h1>Thank You</h1>
            <button className="leaveNewFeedback">Leave New Feedback</button>
        </>
    )
};


export default ThankYou;