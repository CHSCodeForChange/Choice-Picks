//default
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//customized imports
import './index.css';
import Footer from './base/footer';
import Home from './base/home';
import ChoicePicks from './base/choicePicks';
import Recommendations from './base/recommendations';

ReactDOM.render( 
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('home')
);

ReactDOM.render( 
  <React.StrictMode>
    <ChoicePicks />
  </React.StrictMode>,
  document.getElementById('choicePicks')
);

ReactDOM.render( 
  <React.StrictMode>
    <Recommendations />
  </React.StrictMode>,
  document.getElementById('recommendations')
);

ReactDOM.render( 
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

reportWebVitals();
