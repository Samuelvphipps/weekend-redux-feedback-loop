import Header from "../Header/Header";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)

function PageThree(){

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
            payload: {support: Number(evt.target.feedback.value)},
        });

        //link to page 4
        // history.push('/4'); 
    };


    return (
        // Returning page format
        <>
        <Header />
         <article>
            <section name="Location">
                <p className="pageState">3 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <p>How well are you being supported</p>
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

export default PageThree