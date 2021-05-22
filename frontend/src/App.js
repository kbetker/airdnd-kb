import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation'
import FetchTests from './components/FetchTests'
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
    <>

    <Navigation />
    <Switch>
      <FetchTests/>
      <Route exact path="/">
        <h1>Hello from App</h1>
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>


      <Route path="/login">
        <LoginFormPage />
       </Route>
    </Switch>
    </>
  );
}

export default App;
