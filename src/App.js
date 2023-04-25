import { Fragment, useRef } from 'react';
import './App.css';
import { Login } from './Pages/logIn (1)';
import {Route, Routes} from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './Pages/Home';
import { Signup } from './Pages/signUp';
import History from './Pages/History';
import PHome from './Pages/PHome';
import {Firstarticle} from './component/firstArticle'
import { Booking } from './Pages/booking';
import Ask from './Pages/Ask';
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
          <Route path='/ask'  element={<Ask/>}/>
       </Route>
   </Routes>
   
  );
}

export default App;
