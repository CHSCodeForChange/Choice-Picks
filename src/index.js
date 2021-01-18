//default
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//customized imports
import './index.css';
import Header from './base/header';
import Content from './base/content';
import Footer from './base/footer';

ReactDOM.render( 
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
