//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';

//the style for the main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
  fontFamily: 'Lobster',
};
//the style for the main header
const header2={
  color:'#ea3212',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginBottom:'-10px',
  marginTop:'5px',
};
//the style for the user
const user={
  color:'#1B5494',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the password
const password={
  color:'#bb280e',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the user and password input
const input={
  padding: '10px 10px 10px 10px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button Login
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  borderRadius: '10px',
  marginTop:'20px',
  fontSize:'20px',
  fontFamily: 'Lobster',
};
//the page login what inside render
class Login extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      userName: '',
      password: '',
      loggedIn:false,
      userType: 'doctor'
    };
  }

  onSelect (e) {
    this.setState({
      userType: e.target.value
    })
    console.log(e.target.value)
  }

  //handle log in
  loginHandle ()  {
    this.setState({
      loggedIn:true,
    });
  }
  //when change  ... change the
  //username
  onWrite3 (e) {
    this.setState({
      userName: e.target.value,
    });
  };
  //password
  onWrite4 (e) {
    this.setState({
      password: e.target.value,
    });
  };
  //for sign in button
  login() {
    console.log(`you try to login: ${this.state.userName}`);
    //to can use this inside other function
    const that=this;
    //ajax request to sent the data to server then data base
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        userName: `${this.state.userName}`,
        password: `${this.state.password}`,
        userType: `${this.state.userType}`
      },
      //when success do this
      success: function (res) {
         if(that.state.userType === 'doctor'){

        //if login with new user go to sign up page
        if (res[res.length-1]==='e'){
          alert(res);
          //console.log(res[res.length-1]);          
          window.location.href= window.location.origin+'/signup'
        //if login with correct go to home page
        }else if(res[0]==='W'){
          alert(res);
          //console.log(res[0]);
         that.setState({loggedIn:true });
          window.location.href= window.location.origin+'/doctor'
        //if the pssword wrong go to login page
        }else{
          alert(res);
          //console.log(res[res.length-1]); 
          window.location.href= window.location.origin+'/login' 
        }
      } else if(that.state.userType === 'patient'){
          //if login with new user go to sign up page
        if (res[res.length-1]==='e'){
          alert(res);
          //console.log(res[res.length-1]);          
          window.location.href= window.location.origin+'/signup'
        //if login with correct go to home page
        }else if(res[0]==='W'){
          alert(res);
          //console.log(res[0]);
         that.setState({loggedIn:true });
          window.location.href= window.location.origin+'/patients'
        //if the pssword wrong go to login page
        }else{
          alert(res);
          //console.log(res[res.length-1]); 
          window.location.href= window.location.origin+'/login' 
         }
        }
      },
      //when error do this
      error: function (){
        alert(`Failed login please try again ${that.state.userName}`);
        console.log(`Failed login please try again ${that.state.userName}`);
      },
    }); 
  };
  //for home button
  home(){
    window.location.href= window.location.origin+'/'
  };
  //try router
  signup(){
    console.log('HERE:',   this);
    //console.log('HERE:',    window.location.href);
    //change the path I inside it
    window.location.href = window.location.origin+'/signup';
  };
  render () { 
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>
        <h3 style={user}>Usename:
          <input value={this.state.userName} onChange={this.onWrite3.bind(this)} placeholder="Username" style={input}>
          </input>
        </h3>
        <h3 style={password}>Password:
          <input type='password' value={this.state.password} onChange={this.onWrite4.bind(this)} placeholder="Password" style={input}>
          </input>
        </h3>
        <select name="users" style={button} onChange={this.onSelect.bind(this)} value={this.state.userType}>
        <option value="doctor">doctor</option>
        <option value="patient">patient</option>
        </select>
        <button onClick={this.login.bind(this)} style={button}>Login</button>
        <h3 style={header2}>Dont have an account ? </h3>
        <button onClick={this.signup.bind(this)} style={button}>Sign Up</button>
        <button onClick={this.home.bind(this)} style={button}>Back to Home</button>
      </div>
    )
  }
}
//export this component to can use
export default Login;