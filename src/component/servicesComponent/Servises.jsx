import React, { useContext } from "react";
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitMedical, faStaffSnake, faStethoscope, faSuitcaseMedical, faSyringe, faTruckMedical, faUserDoctor} from "@fortawesome/free-solid-svg-icons";
import { RefsContext } from "../../contexts/refs.context";
const   Services=()=>{
    const {refs}=useContext(RefsContext);
    const {servicesRef}=refs;
    return(
        <div ref={servicesRef}>
        <h2 className="h2-service">Services</h2>
          <div className="service-design">
            <div className="flex-container">
               <div className="flex-child magenta">
                <FontAwesomeIcon className="service-icon" icon={faStethoscope}/>
                <h3>Diagnostics</h3>
                <p className="p-services">Phasellus venenatis porta rhoncus. <br></br>Integer et viverra felis.</p>
             </div>
             <div class="flex-child green">
               <FontAwesomeIcon className="service-icon" icon={faStaffSnake}/>
               <h3>Treatment</h3>
               <p className="p-services">Phasellus venenatis porta rhoncus.<br></br>Integer et viverra felis.</p>
              </div>
             <div class="flex-child magenta"> 
                <FontAwesomeIcon className="service-icon" icon={faSuitcaseMedical}/>
               <h3>Surgery</h3>
               <p className="p-services">Phasellus venenatis porta rhoncus. <br></br>Integer et viverra felis.</p>
             </div>
             </div>
    <div className="flex-container">
        <div class="flex-child magenta">
            <FontAwesomeIcon className="service-icon" icon={faTruckMedical}/>
            <h3>Emergancy</h3>
            <p className="p-services">Phasellus venenatis porta rhoncus. <br></br>Integer et viverra felis.</p>
        </div>
        <div className="flex-child green"> 
           <FontAwesomeIcon className="service-icon" icon={faSyringe}/> 
            <h3>Vaccine</h3>
            <p className="p-services">Phasellus venenatis porta rhoncus. <br></br>Integer et viverra felis.</p>
        </div>
        <div className="flex-child magenta">
        <FontAwesomeIcon className="service-icon" icon={faUserDoctor}/> 
            <h3>Qualified Doctors</h3>
            <p className="p-services">Phasellus venenatis porta rhoncus. <br></br>Integer et viverra felis.</p>
        </div>
    </div>
    </div>
    <div className="flex-container">
        <div className="flex-child magenta">
            <h1>120</h1>
            <h3>Years With you</h3>
            <p className="p-services">Etiam ante ante, molestie <br></br>vitae cursus ac, pharetra<br></br>euismod libero.</p>
        </div>
        <div className="flex-child green"> 
            <h1>400</h1>
            <h3>Awards</h3>
            <p className="p-services">Etiam ante ante, molestie<br></br>vitae cursus ac, pharetra<br></br>euismod libero.</p>
        </div>
        <div className="flex-child magenta">
            <h1>250</h1>
            <h3>Doctors</h3>
            <p className="p-services">Etiam ante ante, molestie<br></br>vitae cursus ac, pharetra<br></br>
            euismod libero.</p>
        </div>
        <div className="flex-child magenta">
            <h1>800</h1>
            <h3>Satisfied Client</h3>
            <p className="p-services">Etiam ante ante, molestie<br></br>vitae cursus ac, pharetra<br></br>
            euismod libero.</p>
        </div>
        </div>
    </div>
    )
}
export default Services