//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';


const pageName = {
  fontFamily: 'Imprima',
}

const formCen={
  display: 'inline-block',

  textAlign: 'center',
  width: '100%',
};

const button = {
  backgroundColor: 'blue',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '20%',
  padding: '10px',
  border:'none',
  width:'100px',
};


const input={
  padding: '2px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize : '14px',
  border: '2px solid black',
  borderRadius: '15px',
};

const label={
  fontWeight : 'bold',
  fontSize : '14px',

}

const body={
  backgroundColor: '#BDF1F6',
  fontFamily: 'sans-serif',
  fontSize: '0.85em',
  color: 'rgba(66,66,66 ,1)',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

class DoctorProfile extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
     fullName:'',
     adress:'',
     phone:'07',
     gender:'',
     speciality:'Neurology',

   };
 }


 submit(){
   const that=this;

   $.ajax({
    type: 'POST',
    url: '/doctorprofile',
    data: {
      fullName: `${this.state.fullName}`,
      adress: `${this.state.adress}`,
      phone:`${this.state.phone}`,
      gender:`${this.state.gender}`,
      speciality:`${this.state.speciality}`,
    },
    success: function (res) {
      window.location.href= window.location.origin+'/doctor'
    },

    error: function (){

    },

  });
 }


 logout(){
  const that=this
  $.ajax({
    type: 'GET',
    url: '/logout',
    success: function (res) {

    },

    error: function (){
    },
  }); 
};

changeName (e) {
  this.setState({
    fullName: e.target.value,
  });
};

changephone (e) {
  this.setState({
    phone: e.target.value,
  });
};

changeAdress (e) {
  this.setState({
    adress: e.target.value,
  });
};

changeSpeciality (e) {
  this.setState({
    speciality: e.target.value,
  });
};


// add (){
//     window.location.href= window.location.origin+'/'
//   }

onSelect (e) {
    this.setState({
      gender: e.target.value
    })
    console.log(e.target.value)
  }


render () {
  return (
    <div style={formCen}>
    <div style={body}>
    <form >    
    <h1 style={pageName}> Profile</h1>

    <label style={label} for="fullName">Full Name</label>
    <input style = {input} type="text" id="fullName" value={this.state.fullName} onChange={this.changeName.bind(this)}></input> 
    <br></br>    
    <label style={label} for="phone" value={this.state.phone} onChange={this.changephone.bind(this)}>Phone Number</label>
    <input style = {input} type="text" id="phone"></input> 
    <br></br> 
    <label style={label} for="adress" value={this.state.adress} onChange={this.changeAdress.bind(this)}>Adress</label>
    <input style = {input} type="text" id="adress"></input> 
    <br></br> 
    <select onChange={this.changeSpeciality.bind(this)} value={this.state.speciality}>
    <option value="Neurology">Neurology</option>
    <option value="Dermatology">Dermatology</option>
    <option value="Anesthesiology">Anesthesiology</option>
    <option value="Cardiovascular">Cardiovascular Disease</option>
    <option value="Pediatrics">Pediatrics</option>
    <option value="Plastic Surgery">Plastic Surgery</option>
    <option value="Family Medicine">Family Medicine</option>
    </select>
    <br></br> 
    <br></br> 
    <select name="gender" style={button} onChange={this.onSelect.bind(this)} value={this.state.gender}>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>

    
    <br></br> 
    <br></br> 

    <button onClick={this.submit.bind(this)}>Save</button>

    </form>
    </div>
    </div>
    )
}
}
// <label style={label} for="male">Male</label>&nbsp; &nbsp;
    // <input type="radio" name="gender" id="male" value="male"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    // <label style={label} for="female">Female</label>&nbsp; &nbsp;
    // <input type="radio" name="gender" id="female" value="female"></input><br></br> &nbsp; &nbsp;




export default DoctorProfile;