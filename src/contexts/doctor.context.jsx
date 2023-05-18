import { createContext, useState } from "react";
import axios from "axios";
import { UseQuery, useQuery } from "react-query";
export const DoctorContext=createContext(
    {
        Doctor:null,
        isDoctorLoading:false,
        isDoctorError:false,
    }
)
const fetchDoctor=async ()=>{
    return axios.get('http://localhost:8000/doctor')
}
export const  DoctorProvider=({children})=>{
    const{isLoading:isDoctorLoading,isError:isDoctorError,data}=useQuery('Doctor',fetchDoctor,{staleTime:6000,retry:false})
    const Doctor=data?data.data:[];
    const value={Doctor, isDoctorLoading, isDoctorError}
    return (
        <DoctorContext.Provider value={value}>
          {children}
        </DoctorContext.Provider>
      );
    
}
  