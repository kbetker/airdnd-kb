import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation'
// import FetchAllTest from './components/FetchAllTest' // Testing purposes
import SpotById from './components/SpotById'
import SpotsByTag from './components/SpotsByTag'
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  const all = useSelector(state => state.session.user);
let bg = '';

    if(all){
      bg = `${all.profileBackgroundColor}`
    } else {
      bg = 'white'
    }


  return isLoaded && (
    <>
    <div style={{backgroundColor: bg}} id="woot">
    <Navigation />
      <Switch>


      <Route exact path="/">
        <h1>Hello from App</h1>
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route path="/login">
        <LoginFormPage />
       </Route>

       <Route path="/spot/:id">
        <SpotById />
       </Route>

       <Route path="/spots/:tag">
        <SpotsByTag />
       </Route>

    </Switch>
    </div>
    </>
  );
}

export default App;

      // <Route path='/all'>
      //   <FetchAllTest/>
      // </Route>
