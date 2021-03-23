//default
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//customized imports
import './index.css';
import ChoicePicks from './base/choicePicks';
import Recommendations from './base/recommendations';
import Library from './base/librarian';
import Nominations from './base/nominations';
import Footer from './base/footer';
import Contacts from './base/contacts';

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
    <Library />
  </React.StrictMode>,
  document.getElementById('librarian')
);

ReactDOM.render( 
  <React.StrictMode>
    <Nominations />
  </React.StrictMode>,
  document.getElementById('nominations')
);

ReactDOM.render( 
  <React.StrictMode>
    <Contacts />
  </React.StrictMode>,
  document.getElementById('contacts')
);

ReactDOM.render( 
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

reportWebVitals();
