import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Todo";
import Error from "./component/Error";
import "../src/css/index.css";

const App = () => {
  const [loginStatus, setloginStatus] = useState(false);


  // login token validity check
  const isTokenExpire = () => {
    const timeNow = new Date();
    timeNow.setHours(0, 0, 0, 0);
    const tokenValidityCheck = localStorage.getItem("token");
    console.log(tokenValidityCheck)
    if (Date.parse(timeNow) < Date.parse(tokenValidityCheck)) {
      return true;
    } else {
      return false;
    }
  }
// ------ break ------


  // login button event 
  const login = () => {
    setloginStatus(true);
    const timeNowII = new Date();
    timeNowII.setHours(timeNowII.getHours() + 24);

    localStorage.setItem("loginStatus", true);
    localStorage.setItem("token", timeNowII);
  };
// ------ break ------



  // logout button event 
  const logout = () => {
    setloginStatus(false);
    localStorage.removeItem("loginStatus");
  };
// ------ break ------



  return (
    <Router>
      <Switch>
        <Route exact path="/"
          render={() => loginStatus && isTokenExpire() ? <Redirect to="/todo" /> : <Login login={login} />
          } />

        <Route exact path="/todo"
          render={() => loginStatus && isTokenExpire() ? <Home logout={logout} /> : <Redirect to="/" />} />
          <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
