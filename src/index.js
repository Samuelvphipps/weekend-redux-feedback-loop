import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducer ⬇️

const feedback = (state = {}, action) => {
    switch(action.type){
        // All keys follow this type!
        case 'ADD_KEY':
                    // spread state (i.e) feeling: 1
                                //spread payload i.e. : understanding: 2
            return {...state, ...action.payload}; // new state {feeling:1, understanding: 3}
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
