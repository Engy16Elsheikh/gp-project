import { Fragment, useRef } from 'react';
import './App.css';
import { Login } from './Pages/LogIn/logIn (1)';
import {Route, Routes} from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './Pages/HomePage/Home';
import { Signup } from './Pages/SignUp/signUp';
import History from './Pages/HistoryPage/History';
import PHome from './Pages/HomePage/PHome';
import {Firstarticle} from './component/articleComponent/firstArticle'
import { Booking } from './component/booking/booking';
import { Ask } from './Pages/AskDoctor/askDoctor';
import {Profile} from './Pages/PatientProfile/profile';
import { Forget } from './Pages/ForgetPassword/forget';
import Password from './Pages/ForgetPassword/password';
import { Trueappointment } from './Pages/ReservationPage/truePatient';
import { Email } from './Pages/ForgetPassword/email';


function App() {
  
  const myRef = useRef(null)
  const myAbout=useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()
  const excuteScrollAbout=()=>myAbout.current.scrollIntoView();
  return (
    
      <Routes>
       <Route path='/' element={ <Layout  /> } >
          <Route index  element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/PHome' element={<PHome/>}/>
          <Route path='/firstArticle' element={<Firstarticle/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/ask' element={<Ask/>}/>
          <Route path='/profile'  element={<Profile/>}/>
          <Route path='/reservation'  element={<Trueappointment/>}/>
          <Route path='/forget'  element={<Forget/>}/>
          <Route path='/password'  element={<Password/>}/>
          <Route path='/email'  element={<Email/>}/>
          
       </Route>
   </Routes>
  );
}

export default App;
