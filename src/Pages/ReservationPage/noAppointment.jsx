import { React,useState } from "react";
import './reservation.css';
import mainIcon from '../../Assets/icons8-calendar.gif';

export const Noappointment =() =>{ 

    return(
        <>
        <h2 className="h2-reserve">Your Appointments</h2>
        <img className="reserve-icon" src={mainIcon} alt=""></img>
        <p className="p-appoi">You Don’t have Any Appointments Now :)</p>
        </>
    );
}