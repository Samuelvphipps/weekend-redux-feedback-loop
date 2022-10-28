import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function PageFour(){

// on submit (history.push) (dispatch)

    return (

        // Returning page format
        <article>
            <section name="Location">
                <p className="pageState">4 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <form>
                    <p>Any comments you want to leave?</p>
                    <input type="text" placeholder="Comments"></input>
                    <div className="buttonBar">
                        <button type="submit"> next</button>
                    </div>
                </form>
            </section>
         </article>
    )
}

export default PageFour