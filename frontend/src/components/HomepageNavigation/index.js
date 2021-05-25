import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import Navigation from '../Navigation'
import '../../indexHomepage.css';

{/* <NavLink className='navLinks' to="/signup">Sign Up</NavLink>
<NavLink className='navLinks' to="/login">Log In</NavLink>
<NavLink className='navLinks' to="/spot/2">getOne</NavLink>
<NavLink className='navLinks' to="/spot/new">create</NavLink>
<NavLink className='navLinks' to="/spots/coastal">getByTag</NavLink> */}



function HomepageNavigation(){
    const sessionUser = useSelector(state => state.session.user);


    return(
        <div id="homepageHeader" style={{backgroundImage: 'url(/images/homepage/hompageImage.jpg)'}}>
            <div id="blackbar"></div>
        <Navigation/>
        </div>
    )
}
export default HomepageNavigation;
