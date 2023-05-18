import React, { useContext } from "react";
import Services from "../../component/servicesComponent/Servises";
import Comment from "../../component/commentsComponent/comments";
import Headerimg from '../../Assets/doctor_rwsh.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquare } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../contexts/auth";
import { Aboutus } from "../../component/aboutUsComponent/aboutUs";
import { News } from "../../component/newsComponent/news";
import {Link, useNavigate } from "react-router-dom";
import { Table }from"../../component/tableComponent/table";
const PHome=()=>{
  const nav=useNavigate()
  const onNavigateHandeler=()=>{
    nav(`/booking`)
    }
    return(
      <>
        <header>
        <div className="container"> 
          <div className="row">
           <div className="col-mid-6 col-lg-6">
            <h5>Welcome To Our  Hospital</h5>
            <h2>WISH YOU LOVE OUR SERVICES</h2>
            <button className="btn-booking" onClick={onNavigateHandeler}>Booking An Appointment</button>
            <span>+</span>
           </div>
           <div className="col-lg-6 col-md-6">
             <div className="header-box">
              <img src={Headerimg}/>
              <FontAwesomeIcon icon={faSquare}/>
             </div>
           </div>
          </div>
        </div>
      </header>
        <Table/>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <News/>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Services/>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Aboutus/>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Comment/>
        </>
      )
  }
export default PHome;