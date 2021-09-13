import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUp.css'
import Colors from "../Colors";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [about, setAbout] = useState("");
    const [profilePic, setProfilePic] = useState("profile-default.png");
    const [profileBackgroundColor, setProfileBackgroundColor] = useState('grey')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [profileEdit, setProfileEdit] = useState(false)
    const [profileForegroundWhite, setProfileForegroundWhite] = useState(true)
    const [colorEdit, setColorEdit] = useState(false)

    // let profileArray = [ 'images/profile/profile-default.png', 'images/profile/profilepic_Barbarian.png', 'images/profile/profilepic_Bard.png', 'images/profile/profilepic_Cleric.png', 'images/profile/profilepic_Druid.png', 'images/profile/profilepic_EmeraldEnclave.png', 'images/profile/profilepic_Fighter.png', 'images/profile/profilepic_Harpers.png', 'images/profile/profilepic_LordsAlliance.png', 'images/profile/profilepic_Monk.png', 'images/profile/profilepic_orderOfGauntlet.png', 'images/profile/profilepic_Paladin.png', 'images/profile/profilepic_Ranger.png', 'images/profile/profilepic_Rogue.png', 'images/profile/profilepic_Sorcerer.png', 'images/profile/profilepic_Warlock.png', 'images/profile/profilepic_Wizard.png', 'images/profile/profilepic_Zhentarium.png',]


    useEffect(() => {
        const profileIcons = document.querySelectorAll('.profPic')
        if (profileIcons) {
            for (let i = 0; i < profileIcons.length; i++) {
                profileIcons[i].addEventListener("click", (e) => {
                    setProfilePic(e.target.alt)
                })
            }
        }

    }, [profileEdit])

    useEffect(() => {
        const colors = document.querySelectorAll('.color')
        if (colors) {
            for (let i = 0; i < colors.length; i++) {
                colors[i].addEventListener("click", (e) => {

                    setProfileBackgroundColor(e.target.id)
                })
            }
        }

    }, [colorEdit])


    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, username, email, password, about, profilePic, profileBackgroundColor, profileForegroundWhite }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div id="loginWrapper" style={{ backgroundImage: 'url(/images/drizzit.jpg)' }}>
            <form onSubmit={handleSubmit} id="signUpForm">

                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>

                <div className="input--element">
                    <div className="reviewerProfilePic" onClick={() => profileEdit ? setProfileEdit(false) : [setProfileEdit(true), setColorEdit(false)]}>
                        <div className='profileImg'>
                            <div className="profileCircle" style={{ backgroundColor: profileBackgroundColor }}>
                                <img src={`images/profile/${profilePic}`} className="theImage" alt="profilePic" style={
                                    profileForegroundWhite
                                    ? { filter: "invert()", top: "-2px", left: "-2px", position: "relative" }
                                    : { top: "-2px", left: "-2px", position: "relative" }
                                }></img>
                                <img src="/images/profile/aProfileRing.png" className="theRing" alt="profileRing" style={{ top: "-76px", left: "-2px" }}></img>
                            </div>
                        </div>
                        {profileEdit ? <div> -</div> : <div> +</div>}
                    </div>
                </div>



                <div className="input--element">
                    <div className="profileBackgroundColor" onClick={()=> colorEdit? setColorEdit(false) : [setColorEdit(true), setProfileEdit(false)]} >
                        <h2>Background Color {colorEdit ? <>-</> : <>+</>}</h2>
                    </div>
                    {/* <input
                        type="text"
                        value={profileBackgroundColor}
                        className="input--element"
                        onChange={(e) => setProfileBackgroundColor(e.target.value)}
                        required
                    /> */}
                </div>

                {colorEdit && <Colors/>}

                <div className="input--element">
                    <label htmlFor="name"><h2>Name</h2></label>
                    <input
                        type="text"
                        value={name}
                        className="input--element"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input--element">
                    <label htmlFor="credential"><h2>Email</h2></label>
                    <input
                        type="text"
                        value={email}
                        className="input--element"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input--element">
                    <label htmlFor="credential"><h2>Username</h2></label>
                    <input
                        type="text"
                        value={username}
                        className="input--element"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input--element">
                    <label htmlFor="about"><h2>About</h2></label>
                    <textarea
                        value={about}
                        className="input--element"
                        onChange={(e) => setAbout(e.target.value)}

                    />
                </div>

                <div className="selectProfileDiv">
                    {/* <h2>Select profilePic <span className="plusButton">+</span></h2> */}

                    {profileEdit &&
                        <div className="profilePicturesDiv">
                            <div className="profPic">  <img src='images/profile/profile-default.png' alt="profile-default.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Barbarian.png' alt="profilepic_Barbarian.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Bard.png' alt="profilepic_Bard.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Cleric.png' alt="profilepic_Cleric.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Druid.png' alt="profilepic_Druid.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_EmeraldEnclave.png' alt="profilepic_EmeraldEnclave.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Fighter.png' alt="profilepic_Fighter.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Harpers.png' alt="profilepic_Harpers.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_LordsAlliance.png' alt="profilepic_LordsAlliance.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Monk.png' alt="profilepic_Monk.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_orderOfGauntlet.png' alt="profilepic_orderOfGauntlet.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Paladin.png' alt="profilepic_Paladin.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Ranger.png' alt="profilepic_Ranger.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Rogue.png' alt="profilepic_Rogue.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Sorcerer.png' alt="profilepic_Sorcerer.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Warlock.png' alt="profilepic_Warlock.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Wizard.png' alt="profilepic_Wizard.png"></img></div>
                            <div className="profPic">  <img src='images/profile/profilepic_Zhentarium.png' alt="profilepic_Zhentarium.png"></img></div>
                            <div className="white" style={{ backgroundColor: "white" }} onClick={() => setProfileForegroundWhite(true)}></div>
                            <div className="black" style={{ backgroundColor: "#222222" }} onClick={() => setProfileForegroundWhite(false)}></div>
                        </div>
                    }
                </div>





                <div className="input--element">
                    <label htmlFor="credential"><h2>Password</h2></label>
                    <input
                        type="password"
                        className="input--element"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="input--element">
                    <label htmlFor="credential"><h2>Confirm Password</h2></label>
                    <input
                        type="password"
                        className="input--element"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" id="loginBtn">Sign Up</button>

            </form>
        </div>
    );
}

export default SignupFormPage;
