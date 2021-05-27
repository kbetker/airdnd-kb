import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUp.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  let profileArray = [ 'images/profile/profile-default.png', 'images/profile/profilepic_Barbarian.png', 'images/profile/profilepic_Bard.png', 'images/profile/profilepic_Cleric.png', 'images/profile/profilepic_Druid.png', 'images/profile/profilepic_EmeraldEnclave.png', 'images/profile/profilepic_Fighter.png', 'images/profile/profilepic_Harpers.png', 'images/profile/profilepic_LordsAlliance.png', 'images/profile/profilepic_Monk.png', 'images/profile/profilepic_orderOfGauntlet.png', 'images/profile/profilepic_Paladin.png', 'images/profile/profilepic_Ranger.png', 'images/profile/profilepic_Rogue.png', 'images/profile/profilepic_Sorcerer.png', 'images/profile/profilepic_Warlock.png', 'images/profile/profilepic_Wizard.png', 'images/profile/profilepic_Zhentarium.png',]


useEffect(()=>{
  const profileIcons = document.querySelectorAll('.profPic')
  if(profileIcons){
  for(let i = 0; i < profileIcons.length; i++){
    profileIcons[i].addEventListener("click", (e)=>{
        console.log(e.target.alt)
    })
  }}

},[])


  // useEffect(() => {
  //   const selectProfileDiv = document.querySelector('.selectProfileDiv')
  //   const profileDiv = document.querySelector('.profilePicturesDiv')


  //   function addIcons(){
  //     profileDiv.innerHTML = ''
  //     for(let i = 0; i < profileArray.length; i++){
  //       let newDiv = document.createElement('div')
  //       newDiv.setAttribute("className", "profPic")
  //       newDiv.innerHTML = `<img className="profPic" src="${profileArray[i]}"></img>`
  //       profileDiv.appendChild(newDiv)
  //     }
  //   }
  //   selectProfileDiv?.addEventListener("click", (e)=>{
  //       addIcons()
  //     })

  //   }, [])


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="loginWrapper" style={{backgroundImage: 'url(/images/drizzit.jpg)'}}>
    <form onSubmit={handleSubmit} id="signUpForm">
       <div className="input--element">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
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
        <label htmlFor="about"><h2>about</h2></label>
        <textarea
          value={about}
          className="input--element"
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        </div>

        <div className="selectProfileDiv">
         <h2>Select profilePic <span className="plusButton">+</span></h2>

        <div className="profilePicturesDiv">
              <div className="profPic">  <img src='images/profile/profile-default.png' alt="images/profile/profile-default.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Barbarian.png' alt="images/profile/profilepic_Barbarian.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Bard.png' alt="images/profile/profilepic_Bard.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Cleric.png' alt="images/profile/profilepic_Cleric.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Druid.png' alt="images/profile/profilepic_Druid.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_EmeraldEnclave.png' alt="images/profile/profilepic_EmeraldEnclave.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Fighter.png' alt="images/profile/profilepic_Fighter.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Harpers.png' alt="images/profile/profilepic_Harpers.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_LordsAlliance.png' alt="images/profile/profilepic_LordsAlliance.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Monk.png' alt="images/profile/profilepic_Monk.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_orderOfGauntlet.png' alt="images/profile/profilepic_orderOfGauntlet.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Paladin.png' alt="images/profile/profilepic_Paladin.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Ranger.png' alt="images/profile/profilepic_Ranger.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Rogue.png' alt="images/profile/profilepic_Rogue.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Sorcerer.png' alt="images/profile/profilepic_Sorcerer.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Warlock.png' alt="images/profile/profilepic_Warlock.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Wizard.png' alt="images/profile/profilepic_Wizard.png"></img></div>
              <div className="profPic">  <img src='images/profile/profilepic_Zhentarium.png' alt="images/profile/profilepic_Zhentarium.png"></img></div>
        </div>

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
