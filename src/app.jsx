import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { service as artemisaMiddleware, reducer as artemisa } from 'artemisa'

import UsersList from './components/UsersList'

const store = createStore(combineReducers({ artemisa }), compose(
    applyMiddleware(thunkMiddleware, artemisaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>E2E testing with Docker</h1>
            <div>
                <h2>Users</h2>
                <UsersList />
            </div>
        </div>
    </Provider>,
    document.querySelector("#app"))