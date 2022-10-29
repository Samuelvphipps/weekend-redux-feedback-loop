import { useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';
// on submit (history.push) (dispatch)




function Submit(){
    //history
    const history=useHistory();

    //get redux state
    const feedback = useSelector(store => store.feedback)
    //check for data
    console.log('feedback', feedback);

    //onsubmit to send to DB

    const onSubmit = ()=>{
        console.log('in onSubmit')
        //axios post request
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback,
        })
            .then((response)=>{
                console.log(response);
            })
            .catch((err)=>{
                console.error('POST /feedback error', err);
            });

        history.push('/thankyou');
    }

    return(
        // Returning page format
        //Eventually try sweet alerts
        <article name="reviewPage" id="submitContainer">
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}.</p>
            {/* sends data  */}
            <button onClick={onSubmit}>Submit</button>
        </article>
    )
};

export default Submit;