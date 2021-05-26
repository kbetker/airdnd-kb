import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <ul>
                {errors.map((error, index) =>
                    <li key={index}> { error }</li>
                )}
            </ul>

           <label htmlFor="credential">Username or email</label>
            <input id="credential"
                onChange={(e) => setCredential(e.target.value)}
                value ={credential}
                ></input>

            <label htmlFor="password">Password</label>
            <input id="password"
                onChange={(e) => setPassword(e.target.value)}
                value ={password}
                ></input>
            <button type="submit">Log In</button>
        </form>
        </>

    );

}
export default LoginFormPage;