
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function PageFour(){

//dispatch const and history const

const dispatch=useDispatch();
const history=useHistory();

//onSubmit function to capture form value and histor.push

const onSubmit = (evt) => {
    // prevent reload
    evt.preventDefault();
    console.log('in onSubmit and value is:', evt.target.comments.value);

    //dispatch value to redux
    dispatch({
        type: 'ADD_KEY',
                    //send string in object with key and spread to use same type multiple times
        payload: {comments: evt.target.comments.value},
    });

    //link to page review
    history.push('/submit'); 
};

    return (

        // Returning page format
        <article className="feedbackContainer">
            <section name="Location">
                <p className="pageState">4 of 4 pages</p>
                <div className="locationBar"></div>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                <div className="inputContainer">
                    <p>Any comments you want to leave?</p>
                    <textarea type="text" name="comments" placeholder="Comments"></textarea>
                </div>
                    <div className="buttonBar">
                        <button className="nextBtn" type="submit">Next</button>
                    </div>
                
                </form>
            </section>
         </article>
    )
}

export default PageFour