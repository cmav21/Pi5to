import App from './App'
import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { applyMiddleware, createStore } from 'redux'
import * as serviceWorker from './serviceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, composeWithDevTools())}>
    <App /> 
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
