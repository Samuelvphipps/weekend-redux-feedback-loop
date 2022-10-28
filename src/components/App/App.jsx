import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';

//import components
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import Submit from '../Submit/Submit';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';



function App() {

  return (
    <Router >

    {/* todo page one */}
    <Route path='/' exact>
      <PageOne />
    </Route>
    
    {/* todo page two */}
    <Route path='/2' exact>
      <PageTwo />
    </Route>
    
    {/* todo page three */}
    <Route path='/3' exact>
      <PageThree />
    </Route>
    
    {/* todo page four */}
    <Route path='/4' exact>
      <PageFour />
    </Route>

    {/* todo review and submit */}
    <Route path='/submit'>
      <Submit />
    </Route>  

    {/* thankyou for your feedback page */}
    <Route path='/thankyou' exact>
      <ThankYou />
    </Route>


    {/* todo ADMIN page */}
      {/* STRETCH :( */}
    {/* <Route path='/admin'>
      <Admin />
    </Route> */}

   
    </Router>
  );
}

export default App;
