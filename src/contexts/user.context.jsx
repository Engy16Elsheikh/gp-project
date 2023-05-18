import { createContext, useState } from "react";
import axios from "axios";
import { UseQuery, useQuery } from "react-query";
export const UserContext=createContext(
    {
        user:null,
        isUserLoading:false,
        isUserError:false,
    }
)
const fetchUser=async ()=>{
    return axios.get('http://localhost:8000/doctor')
}
export const  UserProvider=({children})=>{
    const{isLoading:isUserLoading,isError:isUserError,data}=useQuery('user',fetchUser,{staleTime:6000,retry:false})
    const user=data?data.data:[];
    const value={user, isUserLoading, isUserError}
    return (
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
      );
    
}
  
