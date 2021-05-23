import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation'
// import FetchUserTests from './components/FetchUserTests'
import FetchAllTest from './components/FetchAllTest'
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  const all = useSelector(state => state.session.user);
    // if(all){console.log("WTFWTFWTFWTFW: ", all.profileBackgroundColor)}
let bg = '';

    if(all){
      bg = `${all.profileBackgroundColor}`
    } else {
      bg = 'white'
    }

    // console.log("WTFWTFWTFWTFW: ", all.profileBackgroundColor)

  return isLoaded && (
    <>
    <div style={{backgroundColor: bg}} id="woot">
    <Navigation />
    <Switch>
      {/* <FetchUserTests/> */}
      <Route path='/all'>
      <FetchAllTest/>
      </Route>
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
    </div>
    </>
  );
}

export default App;
