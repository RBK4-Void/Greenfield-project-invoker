//import main dependencies react + react-dom + jquery
//to work react
import React from 'react';
//to work react dom
import ReactDOM from 'react-dom';
//to work in ajax
import $ from 'jquery';
//and the router
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, IndexRoute, hashHistory } from "react-router-dom";
//import each components (pages)
import Record from './pages/Record.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import NewPatient from './pages/NewPatient.jsx';
import DoctorProfile from './pages/DoctorProfile.jsx';
import PatientProfile from './pages/PatientProfile.jsx';
import Doctor from './pages/Doctor.jsx';
import Patient from './pages/Patient.jsx';
import Appointment from './pages/Appointment.jsx';

//export const history = createHashHistory()
//style for div top
const div2={
  backgroundColor:'#123456',
  align:'center',
  height:'52px',
  border: 'solid #d22d10 4px',
};
//style for login and sign up
const div3={
  color:'#d22d10',
  fontSize:'25px',
  //marginLeft:'800px',
  //marginTop:'-40px',
  fontFamily: 'Lobster',
  float: 'right',
  width: '180px',

};
//the style for the all top bar
const header1={
  color:'#d22d10',
  fontSize:'25px',
  marginLeft:'10px',
  marginTop:'2px',
  fontFamily: 'Lobster',
};
//the style for the main header
const header2={
  color:'#d22d10',
  fontWeight:'bold',
  fontSize:'25px',
  marginLeft:'10px',
  marginTop:'20px',
  cursor: 'default'
};
//style for not active link
const notActive1={
  color: 'white',
  marginLeft:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
const notActive2={
  color: 'white',
  marginLeft:'10%',
  marginRight:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
const notActive3={
  color: 'white',
  marginRight:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
//style for active link
const Active={
  fontWeight:'bold',
  fontSize:'20px',
  color: '#d22d10',
};
//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router /*history={hashHistory}*/>
        <div>
          <div style={div2}>
            <div style={header1}>
              <NavLink to='/login' exact strict style={{textDecoration:'none',header2}} > 
                <img  src="https://pacificmedicalacls.com/images/pluslogo.png" alt="logo" height="40" width="40"/>
                <h style={header2}>Medical Record</h>
              </NavLink>
              <div style={div3} align="right">
                  <NavLink to='/login' exact strict style={notActive2} activeStyle={Active}>Login</NavLink>
                  <NavLink to='/signup' exact strict style={notActive3} activeStyle={Active}>Sign Up</NavLink>
              </div>
            </div>
          </div>
          <Route path="/" exact strict component={Login}/>     
         <Route path="/record" exact strict component={Record}/>     
          <Route path="/login" exact strict component={Login}/> 
          <Route path="/signup" component={SignUp}/>
          <Route path="/newpatient" exact strict component={NewPatient}/>  
          <Route path="/doctorprofile" exact strict component={DoctorProfile}/>
          <Route path="/patientprofile" exact strict component={PatientProfile}/>
          <Route path="/doctor" exact strict component={Doctor}/>    
          <Route path="/patients" exact strict component={Patient}/>   
          <Route path="/appointment" exact strict component={Appointment}/> 

        </div>
      </Router> 
    )
  }
}
ReactDOM.render(<App2 />, document.getElementById('app1'));