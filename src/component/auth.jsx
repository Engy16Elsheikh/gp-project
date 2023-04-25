import { createContext, useState } from "react";

export const AuthContext = createContext(
  {
    user:null,
    login:()=>null,
    logout:()=>null
  }
);

const fetchUser=()=>{
  return {"name":"asmaa","id":2};
}

export const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const login = (email, password) =>{
      if(email==="asmaa@gmail.com"&&password==="123"){
        const user = fetchUser();
        setUser(user);
       }
    };
    const logout = () =>{
        setUser(null);
    };
    const value = {user ,login, logout}
    return( 
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
};