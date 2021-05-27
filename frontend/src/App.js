import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation'
import HomepageNavigation from './components/HomepageNavigation'
// import FetchAllTest from './components/FetchAllTest' // Testing purposes
import SpotById from './components/SpotById'
import SpotsByTag from './components/SpotsByTag'
import SpotNew from './components/SpotNew'
import FourOhFour from './components/FourOhFour'
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (

    <>
      <Switch>
        <Route exact path="/">
          <HomepageNavigation />
        </Route>

        <Route path="/signup">
          <Navigation />
          <SignupFormPage />
        </Route>

        <Route path="/login">
          <Navigation />
          <LoginFormPage />
        </Route>

        <Route exact path="/spot/new">
          <Navigation />
          <SpotNew />
        </Route>

        <Route exact path="/spot/:id">
          <Navigation />
          <SpotById />
        </Route>

        <Route path="/spots/:tag">
          <Navigation />
          <SpotsByTag />
        </Route>

        <Route path='/'>
          <Navigation />
          <FourOhFour />
        </Route>

      </Switch>
    </>

  );
}

export default App;

      // <Route path='/all'>
      //   <FetchAllTest/>
      // </Route>
