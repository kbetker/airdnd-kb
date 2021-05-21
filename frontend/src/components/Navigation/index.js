import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'




function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
    // if (sessionUser) return (
    //     <Redirect to="/" />
    // )

    return(
        <>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/signup">Sign Up</NavLink>
        <NavLink exact to="/login">Log In</NavLink>
        {sessionUser && <ProfileButton exact to="/logout" />}
        </>
    )
}
export default Navigation;
