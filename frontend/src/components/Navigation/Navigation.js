import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import './navigation.css';



function Navigation(){
    const sessionUser = useSelector(state => state.session.user);






    useEffect(() => {
    const scrollFunction = () =>{

        if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
            document.querySelector(".navbarContainer")?.classList.add("navbarContainer--resize");
            document.querySelector(".navbar--element1")?.classList.add("navbar_element--resize1");
            document.querySelector(".navbar--element2")?.classList.add("navbar_element--resize2");
            document.querySelector(".navbar--element3")?.classList.add("navbar_element--resize3");
            document.querySelector(".homepageLogo")?.classList.add("homepageLogo--resize");
            document.querySelector(".homeSearch")?.classList.add("homeSearch--resize");
            document.querySelector(".navbar--searchBar")?.classList.add("navbar--searchBar--resize");
            document.querySelector(".searchIcon")?.classList.add("searchIcon--resize");
            document.querySelector(".profile")?.classList.add("profile--resize");

        } else if (document.body.scrollTop < 88 || document.documentElement.scrollTop < 88) {
            document.querySelector(".navbarContainer")?.classList.remove("navbarContainer--resize");
            document.querySelector(".navbar--element1")?.classList.remove("navbar_element--resize1");
            document.querySelector(".navbar--element2")?.classList.remove("navbar_element--resize2");
            document.querySelector(".navbar--element3")?.classList.remove("navbar_element--resize3");
            document.querySelector(".homepageLogo")?.classList.remove("homepageLogo--resize");
            document.querySelector(".homeSearch")?.classList.remove("homeSearch--resize");
            document.querySelector(".navbar--searchBar")?.classList.remove("navbar--searchBar--resize");
            document.querySelector(".searchIcon")?.classList.remove("searchIcon--resize");
            document.querySelector(".profile")?.classList.remove("profile--resize");



        } ;
    };
    window.onscroll = function() {scrollFunction()};

    })














    function handleSearch(e){
        e.preventDefault()
        console.log('woot')
    }


    return(
        <div>

          <div id="fixedNav">
                <nav className="navbarContainer">
                    <NavLink className='navbar--element1' exact to="/">
                        <img src='/images/airDNDlogo2.svg' className="homepageLogo" alt="homepageLogo"></img>
                    </NavLink>

                <div className="navbar--element2">
                    <form onSubmit={(e) => handleSearch(e)} className='navbar--searchBar'>
                        <input type="text" className="homeSearch"></input>
                        <button style={{backgroundImage: 'url(/images/searchIcon.png)'}} className="searchIcon"></button>
                    </form>
                </div>


                <div className="navbar--element3"><div className="profile">
                     {sessionUser && <ProfileButton exact to="/logout" />}
                </div></div>
                </nav>

            </div>
        </div>
    )
}
export default Navigation;
