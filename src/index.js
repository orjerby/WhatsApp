import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './containers/MainPage';
import UserPage from './containers/UserPage';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './css/style.css';

ReactDOM.render(
    <Provider store={createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={MainPage} />
                <Route path="/userpage/:id" component={UserPage} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();