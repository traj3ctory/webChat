import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Container/Homepage/Home';
import Login from './Container/Login/Login';
import Register from './Container/Register/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
      </Router>


    </div>
  );
}

export default App;
