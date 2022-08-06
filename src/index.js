import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import BookList from './BookList/BookList';
import { BrowserRouter } from "react-router-dom";




//   const list = document.getElementsByTagName("#document");
//   list.getElementsByTagName("head").innerHTML = "light";


// document.getElementByTagName(meta).style.filter = content="light";
// let cssChange = document.createElement('style');
// cssChange.innerHTML= '#meta content="light"'
// document.selector.appendChild(cssChange );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <App />
        </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
