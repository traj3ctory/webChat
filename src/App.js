import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Container/Homepage/Home';
import Login from './Container/Login/Login';
import Register from './Container/Register/Register';
import PrivateRoute from './Component/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './Action/Action';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  });

  return (
    <div className="App">
      <Router>
          <PrivateRoute exact path="/" component={Home} />
           <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
      </Router>


    </div>
  );
}

export default App;
