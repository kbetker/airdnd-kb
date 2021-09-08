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
import UserPage from "./components/UserPage/UserPage";
import FourOhFour from './components/FourOhFour'
import * as sessionActions from "./store/session";
import SpotEdit from "./components/SpotEdit";

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

        <Route exact path="/spot/:id/edit">
          <Navigation />
          <SpotEdit />
        </Route>

        <Route path="/spots/:tag">
          <Navigation />
          <SpotsByTag />
        </Route>

        <Route path="/spots/search/:title">
          <Navigation />
          <SpotsByTag />
        </Route>

        <Route path="/userpage">
          <Navigation />
          <UserPage />
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
