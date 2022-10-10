// this file is the main entry point for the app
import React from 'react';
import { render } from 'react-dom'; //The ReactDOM library is rendering the App component at the root element in the HTML. You can find the HTML by navigating to the public folder. it's the root/wrapper component that houses all of the other components. any change to the app needs to be done in this file
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
render(<App />, root);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
