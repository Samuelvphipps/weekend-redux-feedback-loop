import Header from "../Header/Header";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// on submit (history.push) (dispatch)

function PageTwo(){

    return(

        // Returning page format
        <article>
            <section name="Location">
                <p className="pageState">2 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <form>
                    <p>How well are you understanding the content?</p>
                    <input placeholder="1-5" type="number" max="5" min="1"></input>
                    <div className="buttonBar">
                        <button type="submit"> next</button>
                    </div>
                </form>
            </section>
         </article>
    )
}

export default PageTwo;