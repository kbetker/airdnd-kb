import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton'
import './navigation.css';
import { logout } from '../../store/session'
import * as sessionActions from '../../store/session'


function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
    const bg = sessionUser?.profileBackgroundColor
    const profPic = sessionUser?.profilePic

    function demoLogin (credential, password) {
        return dispatch(sessionActions.login({ credential, password }));
      }

    useEffect(()=>{

        const profileDropDown = document.getElementById('profileMenu');
        const menuOptions = document.querySelector('.menuOptions');

        if(profileDropDown){
        profileDropDown.addEventListener("click", (e)=> {
         menuOptions?.classList.add('menuOptions--InView')
        })
        }

        if(menuOptions){
            menuOptions.addEventListener("mouseleave", (e) => {
                menuOptions?.classList.remove('menuOptions--InView')
            })
        }
    })




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
            document.querySelector(".profileImg")?.classList.add("profileImg--resize");
            document.querySelector(".theImage")?.classList.add("theImage--resize");
            document.querySelector(".profileCircle")?.classList.add("profileCircle--resize");
            document.querySelector(".theRing")?.classList.add("theRing--resize");
            document.querySelector(".menuIcon")?.classList.add("menuIcon--resize");
            document.querySelector(".profileMenu")?.classList.add("profileMenu--resize");
            document.querySelector(".menuOptions")?.classList.add("menuOptions--resize");


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
            document.querySelector(".profileImg")?.classList.remove("profileImg--resize");
            document.querySelector(".theImage")?.classList.remove("theImage--resize");
            document.querySelector(".profileCircle")?.classList.remove("profileCircle--resize");
            document.querySelector(".theRing")?.classList.remove("theRing--resize");
            document.querySelector(".menuIcon")?.classList.remove("menuIcon--resize");
            document.querySelector(".profileMenu")?.classList.remove("profileMenu--resize");
            document.querySelector(".menuOptions")?.classList.remove("menuOptions--resize");

        } ;
    };
    window.onscroll = function() {scrollFunction()};

    })

    const dispatch = useDispatch();
    function logOut(e){
        return dispatch(logout())
    }


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

                    {
                    // session user logged in ?
                    sessionUser ?
                    <div className="profileMenu" id="profileMenu">
                           <img src="/images/menuImage.png" className="menuIcon" alt="menu icon"></img>
                           <div className='profileImg'>
                                <div className="profileCircle" style={{backgroundColor: bg}}>
                                <img src={`/images/profile/${profPic}`} className="theImage" alt="profileImage"></img>
                                <img src="/images/profile/aProfileRing.png" className="theRing" alt="ringImage"></img>
                                        <div className="menuOptions" style={{height: '95px'}}>
                                        <NavLink to={'/spot/new'}  className="menu--element">List your spot!</NavLink>
                                        <div className="menu--element" onClick={(e)=>logOut()}>Log Out</div>

                                        </div>
                                </div>
                            </div>
                    </div>


                : // else


                <div className="profileMenu" id="profileMenu">
                <img src="/images/menuImage.png" className="menuIcon" alt="menu icon logged out"></img>
                <div className='profileImg' alt="logged out profile">
                     <div className="profileCircle" style={{backgroundColor: '#777777'}}>
                     <img src="/images/profile/profile-default.png" className="theImage" alt="default profile"></img>
                     <img src="/images/profile/aProfileRing.png" className="theRing" style={{opacity: '0'}} alt="default ring"></img>
                             <div className="menuOptions">
                             <NavLink to={'/login'}  className="menu--element">Log In</NavLink>
                             <NavLink to={'/signup'}  className="menu--element">Sign Up</NavLink>
                             <div onClick={()=>demoLogin('demo-user', 'password')}  className="menu--element">Demo User</div>
                             </div>
                     </div>
                 </div>
         </div>



                }

                     {/* {sessionUser && <ProfileButton exact to="/logout" />} */}
                </div></div>
                </nav>

            </div>
        </div>
    )
}
export default Navigation;
