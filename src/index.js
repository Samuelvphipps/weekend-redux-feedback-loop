import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducer ⬇️

const feedback = (state = {
    feelings: 5,
    understanding: 5,
    support: 5,
    comments: 'I love this stuff'
}, action) => {
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
