import React from 'react'
import Headerimg from '../../Assets/doctor_rwsh.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquare } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import Services from '../../component/servicesComponent/Servises'
import { Aboutus } from '../../component/aboutUsComponent/aboutUs'
import Comment from "../../component/commentsComponent/comments";
const Home=()=>{
    return(
      <>
      <header>
        <div className="container"> 
          <div className="row">
           <div className="col-mid-6 col-lg-6">
            <h5>we provide All Health care solutions</h5>
            <h2>protect your health and takecare of your health</h2>
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
       <Services/>
       <br></br> <br></br> <br></br> <br></br> <br></br>
       <Aboutus/>
       <br></br> <br></br> <br></br> <br></br> <br></br>
       <Comment/>
       </>
    )
}
export default Home;