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
        <div stlye={{margin: '10px', padding: '10px'}}> <NavLink exact to="/"> Home</NavLink></div>
        <div stlye={{margin: '10px', padding: '10px'}}> <NavLink to="/signup">Sign Up</NavLink></div>
        <div stlye={{margin: '10px', padding: '10px'}}> <NavLink to="/login">Log In</NavLink></div>
        <div stlye={{margin: '10px', padding: '10px'}}> <NavLink to="/all">Gotta Fetch em All</NavLink></div>
        {sessionUser && <ProfileButton exact to="/logout" />}
        </>
    )
}
export default Navigation;
