import Header from "../Header/Header";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)

function PageOne(){
    console.log('on page one: How are you feeling?');
    return (
        // Returning page format
         <article>
            <section name="Location">
                <p className="pageState">1 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <form>
                    <p>How are you feeling today?</p>
                    <input placeholder="1-5" type="number" max="5" min="1"></input>
                    <div className="buttonBar">
                        <button type="submit"> next</button>
                    </div>
                </form>
            </section>
         </article>
        
    )
}

export default PageOne;