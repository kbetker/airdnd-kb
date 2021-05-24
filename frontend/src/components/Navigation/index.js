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
        <NavLink className='navLinks' exact to="/"> Home</NavLink>
        <NavLink className='navLinks' to="/signup">Sign Up</NavLink>
        <NavLink className='navLinks' to="/login">Log In</NavLink>
        <NavLink className='navLinks' to="/spot/2">getOne</NavLink>
        <NavLink className='navLinks' to="/spots/wat">getByTag</NavLink>
        {sessionUser && <ProfileButton exact to="/logout" />}
        </>
    )
}
export default Navigation;
