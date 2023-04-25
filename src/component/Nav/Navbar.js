import React, { useContext } from "react";
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Nav.css';
import { AuthContext } from "../auth";
import { RefsContext } from "../../contexts/refs.context";
const Navbars=()=>{
  const {user,logout}=useContext(AuthContext)
  const {executeScroll}=useContext(RefsContext);
    return(
        <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#Home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="home-style">
              <Link to='/'>Home</Link>
              </div>
              <Nav.Link onClick={()=>executeScroll("servicesRef")}>Services</Nav.Link>
              <Nav.Link  onClick={()=>executeScroll("aboutRef")}>AboutUs</Nav.Link>
               <Nav.Link onClick={()=>executeScroll("contactRef")}>ContactUs</Nav.Link>
               <div className="link-style">
              {!user
               ?
              (<Link to='/login'>LogIn</Link>)
              :
              (<Link onClick={logout} to='/login'>LogOut</Link>)
              }
               </div>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars;