import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import AddEmployee from './AddEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChangePassword from './Changepassword';
import Profile from './Profile';
import SignIn from './ManagerLogin';
import IndexHome from './IndexHome'
import Login from './Emplogin';
import EmpHome from './EmpHome';
import Apply from './Apply';
import './App.css'
import About from './About';
import Contactus from './Contactus'
import Help from './Help'
function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexHome/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/changepwd' element={<ChangePassword/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/ehome' element={<EmpHome/>}/>
        <Route path='/mlogin' element={<SignIn/>}/>
        <Route path='/elogin' element={<Login/>}/>
        <Route path='/apply' element={<Apply />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/Help' element={<Help/>}/>


        
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));