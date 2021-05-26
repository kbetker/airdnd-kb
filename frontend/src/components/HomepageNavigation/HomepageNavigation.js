import React from 'react';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton'
import Navigation from '../Navigation'
import './index.css';
import { Link } from 'react-router-dom'



// style={{backgroundImage: 'url(/images/homepage/hompageImage.jpg)'}}
function HomepageNavigation(){
    // const sessionUser = useSelector(state => state.session.user);


    return(
        <div id="mainContainer">

            <div id="homepageHeader" style={{backgroundImage: 'url(/images/homepage/hompageImage.jpg)'}}>
                <div id="blackbar"></div>
                <Navigation/>
            </div>

            <div id="exploreNearby">

                    <div className="nearbyDiv"><h1>Explore Nearby</h1></div>
                    <div className="nearbyDiv"></div>
                    <div className="nearbyDiv"></div>
                    <div className="nearbyDiv"></div>

                   <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/neverWinter.jpg" className="nearbyPic" alt="Neverwinter"></img>
                            <div className="nearbyText">
                                <h2>Neverwinter</h2>
                               <p className="nearbyText">5 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/silveryMoon.jpg" className="nearbyPic" alt="Silverymoon"></img>
                            <div className="nearbyText">
                                <h2>Silverymoon</h2>
                               <p className="nearbyText">20 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/luskan.jpg" className="nearbyPic" alt="Luskan"></img>
                            <div className="nearbyText">
                                <h2>Luskan</h2>
                               <p className="nearbyText">12 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/mitrhalHall.jpg" className="nearbyPic" alt="Mithral Hall"></img>
                            <div className="nearbyText">
                                <h2>Mithral Hall</h2>
                               <p className="nearbyText">23 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/IcewindDale.jpg" className="nearbyPic" alt="Icewind Dale"></img>
                            <div className="nearbyText">
                                <h2>Icewind Dale</h2>
                               <p className="nearbyText">19 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/waterdeep.jpg" className="nearbyPic" alt="Waterdeep"></img>
                            <div className="nearbyText">
                                <h2>Waterdeep</h2>
                               <p className="nearbyText">11 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/conyBerry.jpg" className="nearbyPic" alt="Cony Berry"></img>
                            <div className="nearbyText">
                                <h2>Conyberry</h2>
                               <p className="nearbyText">2 day journey</p>
                            </div>

                    </Link>

                    <Link to='/spot/2' className="nearbyDiv">

                        <img src="/images/homepage/neverWinter.jpg" className="nearbyPic" alt="menzobaranzan"></img>
                            <div className="nearbyText">
                                <h2>Menzobaranzan</h2>
                               <p className="nearbyText"> ??? </p>
                            </div>

                    </Link>

            </div>

            <div id="liveAnywhere">
                <div className="liveAnywhere--element"><h1>Live Anywhere</h1></div><div className="liveAnywhere--element"></div><div></div><div></div>

                <Link to="/spots/coastal" className="liveAnywhere--element">
                    <img src="/images/homepage/outdoorExperience.jpg" className="liveAnywhereImg" alt="Outdoor Experiences"></img>
                    <h2>Outdoor Experiences</h2>
                </Link>

                <Link to="/spots/wat" className="liveAnywhere--element">
                    <img src="/images/homepage/uniqueStays.jpg" className="liveAnywhereImg" alt="Unique Stays"></img>
                    <h2>Unique Stays</h2>
                </Link>

                <Link to="/spots/coastal" className="liveAnywhere--element">
                    <img src="/images/homepage/entireHouse.jpg" className="liveAnywhereImg" alt="Entire House"></img>
                    <h2>Entire House</h2>
                </Link>

                <Link to="/spots/coastal" className="liveAnywhere--element">
                    <img src="/images/homepage/takesFamiliars.jpg" className="liveAnywhereImg" alt="Takes Famliars"></img>
                    <h2>Takes Famliars</h2>
                </Link>



            </div>

            <div id="footer"></div>


        </div>
    )
}
export default HomepageNavigation;
