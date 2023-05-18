import { createContext, useState } from "react";
import axios from "axios";
import { UseQuery, useQuery } from "react-query";
export const AppointmentContext=createContext(
    {
        reservation:null,
        isReservationLoading:false,
        isReservationError:false,
    }
)
const fetchReservation=async ()=>{
    return axios.get('http://localhost:8000/reservation')
}
export const  AppointmentProvider=({children})=>{
    const{isLoading:isReservationLoading,isError:isReservationError,data}=useQuery('reservation',fetchReservation,{staleTime:6000,retry:false})
    const reservation=data?data.data:[];
    const value={reservation, isReservationLoading, isReservationError}
    return (
        <AppointmentContext.Provider value={value}>
          {children}
        </AppointmentContext.Provider>
      );
    
}
  