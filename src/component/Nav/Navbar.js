import React, { useContext } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Nav.css';
import Headerimg from '../../Assets/medical-technology-logo-design-vector-171347907.jpg'
import { AuthContext } from "../../contexts/auth";
import { RefsContext } from "../../contexts/refs.context";
const Navbars=()=>{
  const {user,logout}=useContext(AuthContext)
  const {executeScroll}=useContext(RefsContext);
    return(
        <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#Home"> <img src={Headerimg}style={{width: "100px", height: "50px"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="links-container">
              <Link to='/'>Home</Link>
              <Nav.Link onClick={()=>executeScroll("servicesRef")}>Services</Nav.Link>
              <Nav.Link  onClick={()=>executeScroll("aboutRef")}>AboutUs</Nav.Link>
               <Nav.Link onClick={()=>executeScroll("contactRef")}>ContactUs</Nav.Link>
               
              </div>
              <div style={{marginLeft:"20px",marginTop: "7px",display:"flex"}}>
              {!user
               ?
              (
                <>
                <Link to='/login' role={'button'}>LogIn</Link>
                
                </>
              )

              :
              (
              <>
              <Link to='/reservation' className="nav-reserv">Reservation</Link>
              <Link style={{marginLeft:"20px"}} onClick={logout} to='/login'>LogOut</Link>
              <Link style={{marginLeft:"200px"}} to='/profile'>{user.name}</Link>
              </>
              )
              
            }
              
               </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars;