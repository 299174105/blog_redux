import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import reducers from './reducers';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import App from './components/App';


ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App/>
    </Provider>
    ,
    document.querySelector("#root")
);