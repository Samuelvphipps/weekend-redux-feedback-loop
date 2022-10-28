import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';



function App() {

  return (
    <Router >

    {/* todo page one */}
    <Route path='/' exact>

    </Route>
    
    {/* todo page two */}
    <Route path='/2' exact>

    </Route>
    
    {/* todo page three */}
    <Route path='/3' exact>

    </Route>
    
    {/* todo page four */}
    <Route path='/4' exact>

    </Route>

    {/* todo review and submit */}
    <Route path='/submit'>

    </Route>  

    {/* thankyou for your feedback page */}
    <Route path='thankyou'>

    </Route>


    {/* todo ADMIN page */}

    <Route path='/admin'>

    </Route>

    {/* <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div> */}
    </Router>
  );
}

export default App;
