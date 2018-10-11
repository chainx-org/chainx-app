import React from 'react';

import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
      </React.Fragment>
    </Router>
  );
};

export default App;
