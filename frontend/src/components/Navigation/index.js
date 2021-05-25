import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import '../../navigation.css';



function Navigation(){
    const sessionUser = useSelector(state => state.session.user);

        const scrollFunction = () =>{
        if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
            document.querySelector(".navbarContainer").classList.add("navbarContainer-resize");
        } else if (document.body.scrollTop < 88 || document.documentElement.scrollTop < 88) {
            document.querySelector(".navbarContainer").classList.remove("navbarContainer-resize");

        } ;
    };
    window.onscroll = function() {scrollFunction()};




    function handleSearch(e){
        e.preventDefault()
        console.log('woot')
    }


    return(
        <div>

          <div id="fixedNav">
                <nav className="navbarContainer">
                    <NavLink className='navbar--element' exact to="/">
                        <img src='/images/airDNDlogo2.svg' className="homepageLogo"></img>
                    </NavLink>

                <div className="navbar--element">
                    <form onSubmit={(e) => handleSearch(e)} className='navbar--searchBar'>
                        <input type="text" className="homeSearch"></input>
                        <button style={{backgroundImage: 'url(/images/searchIcon.png)'}} className="searchIcon"></button>
                    </form>
                </div>


                <div className="navbar--element"><div className="profile">
                     {sessionUser && <ProfileButton exact to="/logout" />}
                </div></div>
                </nav>

            </div>
        </div>
    )
}
export default Navigation;
