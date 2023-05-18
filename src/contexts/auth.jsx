import { createContext, useState } from "react";
import  axios  from "axios";
import { useQuery } from "react-query";

export const AuthContext = createContext(
  {
    user:null,
    login:()=>null,
    logout:()=>null
  }
);

//const fetchUser = async (email, password) => {
  //const response = await axios.get(`/api/user?email=${email}&password=${password}`);
  //return response.data;
//}; 

const fetchUser=()=>{
  return {"name":"asmaa","id":2};
}

//export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);

  //const userQuery = useQuery('user', () => fetchUser(user?.email, user?.password), {
  //  enabled: Boolean(user),
   // refetchOnWindowFocus: false,
  //});

export const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const login = (email, password) =>{
     if(email==="asmaa@gmail.com"&&password==="123"){
        const user = fetchUser();
        setUser(user);
       }
    };

    //const login = async (email, password) => {
      //const { data } = await axios.post('/api/login', { email, password });
      //setUser(data);
    //};

    //const logout = async () => {
      //await axios.post('/api/logout');
      //setUser(null);
    //};

    const logout = () =>{
        setUser(null);
    };

    //const value = { user: userQuery.data, login, logout };

    const value = {user ,login, logout}
    return( 
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
};





