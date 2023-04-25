import React, { useState} from "react";
import 'https://kit.fontawesome.com/64d58efce2.js';
import Headerimg from '../Assets/undraw_medicine_b-1-ol.svg';
import './signUp.css';
import { useNavigate } from "react-router-dom";
import {Border} from "./login.styles";
import { Link } from "react-router-dom";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [birthday, setBirthday] = useState('');
    const nav =useNavigate();
    const nav2 =useNavigate();
    //const onNavigateHandeler=()=>{
       // nav(`/history`)
    //}
    //const onNavigate=()=>{
      //  nav2(`/login`)
    //}
    const handleSubmit = (e) => {
        e.preventDefault();
        nav(`/history`)
    }
    return (
        <div className="sign-up-container">
                <div className="form-container">
                    <form className="sign-up"  onSubmit={handleSubmit}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input value={name} onChange={(newName) => setName(newName.target.value)} type="text" placeholder="User Name" name="userName" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fa fa-envelope"></i>
                            <input value={email} onChange={(newEmail) => setEmail(newEmail.target.value)} type="email" placeholder="E-mail" name="email" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input value={password} onChange={(newPassword) => setPassword(newPassword.target.value)} type="password" placeholder="Password" name="password" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fa fa-phone"></i>
                            <input value={phone} onChange={(newPhone) => setPhone(newPhone.target.value)} type="tel" placeholder="Phone Number" name="phone" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fa fa-calendar"></i>
                            <input value={birthday} onChange={(newBirthday) => setBirthday(newBirthday.target.value)} type="date" placeholder="Birth Date" name="birthday" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-city"></i>
                            <input value={city} onChange={(newCity) => setCity(newCity.target.value)} type="text" placeholder="Your City" name="city" required></input>
                        </div>
                        <div className="input-field-radio">
                            <ul>
                                <li>
                            <label>Gender: &nbsp; &nbsp;</label>
                            </li>
                            <li>
                            <i className="fas fa-male"></i>
                            <input value={gender} onChange={(newGender) => setGender(newGender.target.value)} type="radio"  name="gender" id="m"></input>
                            <label htmlFor="m">Male</label>
                            <i className="fas fa-female"></i>
                            <input value={gender} onChange={(newGender) => setGender(newGender.target.value)} type="radio"  name="gender" id="f"></input>
                            <label htmlFor="f">Female</label>
                            </li>
                            </ul>
                        </div> 
                        <input className="signup-btn" type="submit" value="SignUp"></input>
                        <Border/>
                        <div className="content">
                            
                            {<div>Already have an account ? You can Login from <Link style={{display:"inline-block"}} to='/login'>here.</Link></div>}
                        </div> 
                    </form>
                </div>
        
                                
                       
                        <img src={Headerimg} className="image" alt=""></img>
                    </div>
                
       
    )
}