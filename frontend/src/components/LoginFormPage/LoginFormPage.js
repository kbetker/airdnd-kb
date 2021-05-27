import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login.css'

export function LoginFormPage(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

    return(
        <div id="loginWrapper" style={{backgroundImage: 'url(/images/loginBackground.jpg)'}}>
        {/* <div id="spacer"></div> */}
            {/* <div id="wtf"> */}
                    <form onSubmit={(e) => handleSubmit(e)} id="wtf">
                    <div id="credentialDiv">
                        <ul>
                            {errors.map((error, index) =>
                                <li key={index}> { error }</li>
                            )}
                        </ul>
                            <label htmlFor="credential"><h2>Username or email</h2></label><br></br>
                            <input id="credential"
                            onChange={(e) => setCredential(e.target.value)}
                            value ={credential}
                            ></input>
                    </div>
                    <div id="passwordDiv">
                        <label htmlFor="password"><h2>Password</h2></label><br></br>
                        <input id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value ={password}
                            ></input>
                    </div>

                    <button type="submit" id="loginBtn">Log In</button>

                </form>
            {/* </div> */}

        </div>

    );

}
export default LoginFormPage;
