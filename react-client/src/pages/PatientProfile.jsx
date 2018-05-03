//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';


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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

const pageName = {
  fontFamily: 'Imprima',
}

class PatientProfile extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
     fullName:'',
     address:'',
     contact:'',
     bday:'',
     gender:'',
     disability:'',
     drugs:'',
     pregnant:'',
     medications:'',
   };
 }


 submit(){
   const that=this;

   $.ajax({
    type: 'POST',
    url: '/patientprofile',
    data: {
      fullName: `${this.state.fullName}`,
      address: `${this.state.adress}`,
      phone: `${this.state.phone}`,
      gender: `${this.state.gender}`,
      bday: `${this.state.bday}`,
      disability: `${this.state.disability}`,
      drugs: `${this.state.drugs}`,
      pregnant: `${this.state.pregnant}`,
      medications: `${this.state.medications}`,
    },
    success: function (res) {
      window.location.href= window.location.origin+'/patients'
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
changePhone (e) {
  this.setState({
    phone: e.target.value,
  });
};
changeAddress (e) {
  this.setState({
    address: e.target.value,
  });
};

changeDisability (e) {
  this.setState({
    disability: e.target.value,
  });
};

changePregnant (e) {
  this.setState({
    pregnant: e.target.value,
  });
};

changeMedications (e) {
  this.setState({
    medications: e.target.value,
  });
};

render () {
  return (
    <div style={formCen}>
    <div style={body}>
    <form >
    <h1 style={pageName}> Patient</h1>

    <label for="fullName">Full Name</label>
    <input style = {input} type="text" id="fullName" value={this.state.fullName} onChange={this.changeName.bind(this)}></input> 
    <br></br>    
    <label for="phone" value={this.state.phone} onChange={this.changePhone.bind(this)}>Phone Number</label>
    <input style = {input} type="text" id="phone"></input> 
    <br></br> 
    <label for="address" value={this.state.address} onChange={this.changeAddress.bind(this)}>Address</label>
    <input style = {input} type="text" id="address"></input> 
    <br></br> 
    <label for="male">Male</label>&nbsp; &nbsp;
    <input type="radio" name="gender" id="male" value="male"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    <label for="female">Female</label>&nbsp; &nbsp;
    <input type="radio" name="gender" id="female" value="female"></input><br></br> 
    <br></br> 

    <label for="bday">Date Of Birth</label>
    <input style = {input} type="date" name="bday" id="bday"></input>
    <br></br> 

    <p style={label} value={this.state.disability} onChange={this.changeDisability.bind(this)}> Do you suffer from any disability? </p>
    <label for="Yes">Yes</label>&nbsp; &nbsp;
    <input type="radio" name="disChoice" id="yes" value="yes"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    <label for="no">No</label>&nbsp; &nbsp;
    <input type="radio" name="disChoice" id="no" value="no"></input><br></br> 
    <br></br> 

    <p style={label}> Have you ever, or do you now take illegal drugs? </p>
    <label for="Yes">Yes</label>&nbsp; &nbsp;
    <input type="radio" name="drugChoice" id="yes" value="yes"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    <label for="no">No</label>&nbsp; &nbsp;
    <input type="radio" name="drugChoice" id="no" value="no"></input><br></br> 
    <br></br> 


    <p style={label} value={this.state.medications} onChange={this.changeMedications.bind(this)}> Have you ever had an allergic reaction to medication? </p>
    <label for="Yes">Yes</label>&nbsp; &nbsp;
    <input type="radio" name="mediChoice" id="yes" value="yes"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    <label for="no">No</label>&nbsp; &nbsp;
    <input type="radio" name="mediChoice" id="no" value="no"></input><br></br> 
    <br></br> 


    <p style={label} value={this.state.pregnant} onChange={this.changePregnant.bind(this)}> For females: Are you pregnant? </p>
    <label for="Yes">Yes</label>&nbsp; &nbsp;
    <input type="radio" name="preChoice" id="yes" value="yes"></input>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    <label for="no">No</label>&nbsp; &nbsp;
    <input type="radio" name="preChoice" id="no" value="no"></input><br></br> 
    <br></br> 

    
    <button style={button} onClick={this.submit.bind(this)}>Save</button>
    </form>
    </div>

    </div>

    )
}
}
export default PatientProfile;