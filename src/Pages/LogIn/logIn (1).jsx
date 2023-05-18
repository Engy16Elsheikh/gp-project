import React, {useState,useContext} from "react";
import './logIn.css';
import 'https://kit.fontawesome.com/64d58efce2.js';
import Headerimg from '../../Assets/undraw_medicine_b-1-ol.svg';
import {FormContainer,Container,LoginForm, Border} from "./login.styles"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav =useNavigate();
    const {login}=useContext(AuthContext)
    const handleSubmit =(e)=>{
        
        login(email,password);
        e.preventDefault();
        nav("/PHome")
    }
    return (
        <Container>
                
                    <LoginForm onSubmit={handleSubmit}>
                        <h2 className="title">Log in</h2>
                        <div className="input-field">
                            <i className="fa fa-envelope"></i>
                            <input value={email} onChange={(newEmail) => setEmail(newEmail.target.value)} type="email" placeholder="E-mail" name="email" required></input>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input value={password} onChange={(newPassword) => setPassword(newPassword.target.value)} type="password" placeholder="Password" name="password" required></input>
                        </div>
                        <input type="submit" value="Login" className="button solid"  ></input>
                        <Border/>
                        <div className="content">
                            
                            {<div>Don't have an account? Register <Link style={{display:"inline-block"}} to='/signup'>here.</Link></div>}
                        </div> 
                        <div className="content">
                            {<div>Forget Password <Link style={{display:"inline-block"}} to='/email'>enter here.</Link></div>}
                        </div> 
                    </LoginForm>
          
                
                        <img src={Headerimg} className="image" alt=""></img>
                
        </Container>
    );
}