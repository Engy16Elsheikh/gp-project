import { React,useState } from "react";
import { useContext } from "react";
import './reservation.css';
import { useNavigate } from "react-router-dom";
import { Noappointment } from "./noAppointment";
import { AppointmentContext } from "../../contexts/Appointment.context";
import axios from 'axios';
export const Trueappointment =(props)=>{
  const { reservation } = useContext(AppointmentContext);
  const nav=useNavigate()
  const onNavigateHandeler=()=>{
    nav(`/ask`)
    }
    const [appointments, setAppointments] = useState([{id:1,date:'5-5-2023',time:'7:00pm',doctorName:'Dr Ahmed',department:'Internal Medicine'},{id:2,date:'7-5-2023',time:'8:00pm',doctorName:'Dr Nadia',department:'Dentist'}]);
      
    const onDeleteAppointment = (id) => {
      //const updatedAppointments = reservation.filter(reservation => reservation.id !== id);
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(updatedAppointments);
    };

    const handleDelete = (id) => {
      axios.delete(`/appointments/delete/${id}`)
        .then(response => {
          console.log(response.data);
          onDeleteAppointment(id);
        })
        .catch(error => {
          console.error(error);
        });
    };
    //const appointmentItems = reservation.map(appointment => (
    const appointmentItems = appointments.map(appointment => (

      //<div className="an-appoint-edit" key={reservation.id}>
          //<h3 className="h3-edit">{reservation.department}</h3>
          //<p className="edit-element">{reservation.date}</p>
          //<p className="edit-element">{reservation.time}</p>
          //<p className="edit-element">{reservation.doctorName}</p>
        <div className="an-appoint-edit" key={appointment.id}>
          <h3 className="h3-edit">{appointment.department}</h3>
          <p className="edit-element">{appointment.date}</p>
          <p className="edit-element">{appointment.time}</p>
          <p className="edit-element">{appointment.doctorName}</p>
          {/* <button className="btn-edit-appoint" onClick={() => handleDelete(reservation.id) & onDeleteAppointment(reservation.id)}>Delete</button> */}
          <button className="btn-edit-appoint" onClick={() => handleDelete(appointment.id)}>Delete</button>
          <button className="btn-edit-appoint" onClick={onNavigateHandeler}>Ask Doctor</button>
        </div>
      ));
      if(appointments.length===0){
        return(
          <Noappointment/>
        )
      }
    return(
        <>
         <div>
         <h2 className="h2-reserve">Your Appointments</h2>
          {appointmentItems}
        </div>
        </>
    );
}