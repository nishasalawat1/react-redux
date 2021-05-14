import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Imports for redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Services/Reducer/index';
// Redux Imports End
 
const store = createStore(rootReducer)
console.log('store',store)
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
