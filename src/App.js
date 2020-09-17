import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Booking from './Component/Booking/Booking';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Hotel from './Component/Hotel/Hotel';

export const UserContext = createContext();





function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <p>Name:{loggedInUser.name} </p>
  <Router>
    <Header></Header>
     <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/hotel">
            <Hotel />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
