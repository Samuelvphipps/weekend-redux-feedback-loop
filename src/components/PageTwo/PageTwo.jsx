import Header from "../Header/Header";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)

function PageTwo(){
    console.log('on page one: How are you feeling?');

    //dispatch const and history const

    const dispatch=useDispatch();
    const history=useHistory();
    //onSubmit function to capture form value and histor.push

    const onSubmit = (evt) => {
        // prevent reload
        evt.preventDefault();
        console.log('in onSubmit and value is:', evt.target.feedback.value);

        //dispatch value to redux
        dispatch({
            type: 'ADD_KEY',
                        //send object with key and spread to use same type multiple times
            payload: {understanding: Number(evt.target.feedback.value)},
        });

        //link to page 3
        history.push('/3'); 
    }


    return (
        // Returning page format
        <>
        <Header />
         <article>
            <section name="Location">
                <p className="pageState">2 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <p>How well are you understanding the content?</p>
                <form className="feedbackForm" onSubmit={onSubmit}>
                    <div className="scaleValue">
                        <p >Not well at all</p>
                        <input type="radio" name="feedback" className="valueRadio" value="1"></input>
                        <input type="radio" name="feedback" className="valueRadio" value="2"></input>
                        <input type="radio" name="feedback" className="valueRadio" value="3"></input>
                        <input type="radio" name="feedback" className="valueRadio" value="4"></input>
                        <input type="radio" name="feedback" className="valueRadio" value="5"></input>
                        <p >Extremely well</p>
                    </div>
                    <div className="buttonBar">
                        <button type="submit"> next</button>
                    </div>
                </form>
            </section>
         </article>
         </>
    )
}

export default PageTwo;