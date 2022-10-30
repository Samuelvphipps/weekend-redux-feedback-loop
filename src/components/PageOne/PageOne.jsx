
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

// on submit (history.push) (dispatch)

function PageOne(){
    console.log('on page one: How are you feeling?');

    //dispatch const and history const

    const dispatch=useDispatch();
    const history=useHistory();

    //import use state

    const [btnVal, setBtnVal] = useState(false)

    //onSubmit function to capture form value and histor.push

    const onSubmit = (evt) => {
        // prevent reload
        evt.preventDefault();
        console.log('in onSubmit and value is:', evt.target.feedback.value);

        //dispatch value to redux
        dispatch({
            type: 'ADD_KEY',
            //send object with key and spread to use same type multiple times
            payload: {feeling: Number(evt.target.feedback.value)},
        });
        //go to page two
        history.push('/2');
    }

    


    return (
        // Returning page format
        <>
         <article className="feedbackContainer">
            <section name="location">
                <p className="pageState">1 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section className="formContainer">
                <form className="feedbackForm" onSubmit={onSubmit}>
                    <div className="inputContainer">
                        <p>How are you feeling today?</p>
                        <div className="scaleValue">
                            <p >Not well at all</p>
                            {/* I used radios for each page because it seemed 
                            more user friendly than a text field with max/min values */}
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

export default PageOne;