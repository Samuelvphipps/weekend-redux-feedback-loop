
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';


function PageThree(){

    //dispatch const and history const

    const dispatch=useDispatch();
    const history=useHistory();

    //use state to set btn conditional

    const [btnVal, setBtnVal] = useState(false)

    //onSubmit function to capture form value and histor.push
    // on submit (history.push) (dispatch)
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
        history.push('/4'); 
    };


    return (
        // Returning page format
        <>
         <article className="feedbackContainer">
            <section name="Location">
                <p className="pageState">3 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <form className="feedbackForm" onSubmit={onSubmit}>
                    <div className="inputContainer">
                        <p>How well are you being supported?</p>
                        <div className="scaleValue">
                            <p >Not well at all</p>
                            <input onClick={()=>setBtnVal(true)} required type="radio" name="feedback" className="valueRadio" value="1"></input>
                            <input onClick={()=>setBtnVal(true)} required type="radio" name="feedback" className="valueRadio" value="2"></input>
                            <input onClick={()=>setBtnVal(true)} required type="radio" name="feedback" className="valueRadio" value="3"></input>
                            <input onClick={()=>setBtnVal(true)} required type="radio" name="feedback" className="valueRadio" value="4"></input>
                            <input onClick={()=>setBtnVal(true)} required type="radio" name="feedback" className="valueRadio" value="5"></input>
                            <p >Extremely well</p>
                        </div>
                    </div> 
                    <div className="buttonBar">
                        {/* conditional render grayed out btn */}
                        {btnVal ? <button className="nextBtn" type="submit">Next</button>:
                        <button className="nextInactive">Next</button>
                        }
                    </div>
                </form>
            </section>
         </article>
         </>
    )
}

export default PageThree