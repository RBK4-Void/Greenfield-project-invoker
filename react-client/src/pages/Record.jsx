//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the main header
const header1={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'50px',
  fontFamily: 'Lobster',
  marginTop:'2px',
};
//the style for retrieve one patient
const header3={
  color:'black',
  fontWeight:'bold',
  textAlign:'centezr',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginTop:'5px',
  marginLeft: '200px',
};
//style for input retrieve one patient
const input3={
  padding: '10px 10px 10px 10px',
  marginRight: '-80px',
  marginLeft: '-30px',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button retrieve one patient
const button3={
  padding:'6px',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid black',
  fontSize:'20px',
  borderRadius: '15px',
  fontFamily: 'Lobster',
};
//style for th / the const thing
const table={
  border: '3px solid black',
  borderCollapse: 'collapse',
  padding: '3px',
  textAlign : 'center',
  fontSize:'25px',
  fontWeight:'bold',
  color:'black',
  backgroundColor: 'white',
}
//style for td / the changed thing
const table2={
  border: '3px solid black',
  borderCollapse: 'collapse',
  padding: '3px',
  textAlign : 'center',
  fontSize:'25px',
    //fontWeight:'bold',
    color:'white',
    backgroundColor: 'gray',

  }
//the style for the button logout
const button1={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#bb280e',
  color: 'white',
  border: '2px solid #bb280e',
  marginTop:'5px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the style for the button create new patient
const button2={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'0px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the page home what inside render
class Record extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      loggedIn:true,
      patientNumber:3,
      patientName : '',
      //the data get from retrieve
      data:{},
    };
  }
  //when change  ... change the
  //patient number
  onWrite1 (e) {
    this.setState({
      patientNumber: 1*e.target.value,
    });
  };


  onWrite2 (e) {
    this.setState({
      patientName: e.target.value,
    });
  };
  //for logout button
  // logout(){
  //   console.log('you try to logoutDR');
  //   const that=this
  //   //ajax request to logout
  //   $.ajax({
  //     type: 'GET',
  //     url: '/logout',
  //     //when success do this
  //     success: function (res) {
  //       alert(res);
  //       that.setState({loggedIn:false});
  //       window.location.href= window.location.origin+'/login'
  //     },
  //     //when error do this
  //     error: function (){
  //       alert('Failed logout please try again DR');
  //       console.log('Failed logout please try again DR');
  //     },
  //   }); 
  // };
  home(){
    window.location.href= window.location.origin+'/doctor'
  };
  //for button create new patient
  newPatient(){
    console.log('you try to go to create new patient:');
    window.location.href=window.location.origin+'/newpatient';
  };
  //for retrieve one patient
  retrieveOne(){
    console.log('you try to retrieve one patient', typeof this.state.patientNumber);
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/patient',
      data:{number:`${that.state.patientNumber}`},
      //when success do this
      success: function (res) {
        console.log('Sucess retrieve patient have number: ',res[0].number);
        alert('Sucess retrieve patient have number: '+res[0].number);
        that.setState({data:res});
        //console.log(that.state.data);
        that.renderData()
      },
      //when error do this
      error: function (){
        alert('Failed retrieve one patient please try again DR');
        console.log('Failed retrieve one patient please try again DR');
      },
    }); 
  };


  //for retrieve one patient
  retrieveName(){
    console.log('you try to retrieve one patient',  this.state.patientName);
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/patient',
      data:{firstName:`${that.state.patientName}`},
      //when success do this
      success: function (res) {
        console.log('Sucess retrieve patient have firstName: ',res[0].firstName);
        alert('Sucess retrieve patient have firstName: '+res[0].firstName);
        that.setState({data:res});
        //console.log(that.state.data);
        that.renderData()
      },
      //when error do this
      error: function (){
        alert('Try Again Baby');
        console.log('Please try again');
      },
    }); 
  };


  //to save data to can use and render
  renderData(){
    //console.log('HERE: ',this.state.data[0]);
    //i get the data now i neeed to render it
    var data=this.state.data[0];
    console.log('HERE: ',data);

    //Sconsole.log('HERE: ',this.state.data[0]);
    $('.number').html(data.number);
    $('.firstName').html(data.firstName);
    $('.lastName').html(data.lastName);
    $('.gender').html(data.gender);
    $('.age').html(data.age);
    $('.phone').html(data.phone);
    $('.conditions').html(data.conditions);
    $('.pastDiseases').html(data.past_Diseases);
    $('.currMedications').html(data.currentlly_Medications);
    $('.geneticDisease').html(data.genetic_Diseases);
    $('.allergies').html(data.allergies);
    $('.description').html(data.description);    
  };
  render () {
    return (
      <div1>
      <h2 style={header1}>Retrieve data for patient</h2>
      

      <div2 className='row' style={{marginLeft:'auto',marginRight: 'auto'}}>
      <h3 className='col-xs-4 col-xs-offset-1' style={header3}>Retrieve data by Name</h3>
      <input className='col-xs-1 col-xs-offset-1' value={this.state.patientName} type='text' onChange={this.onWrite2.bind(this)} placeholder="Patient Name" style={input3}></input>
      <button className='col-xs-2 col-xs-offset-1' onClick={this.retrieveName.bind(this)} style={button3}>Show</button>
      </div2>


      <div3>
      <table style={{width:'80%',marginLeft:'auto',marginRight: 'auto',marginTop:'20px'}}>
      <tr>
      <th style={table}>Number</th>
      <th style={table}>First name</th> 
      <th style={table}>Last name</th>
      <th style={table}>Gender</th>
      </tr>
      <tr>
      <td className='number' value='tttttt' style={table2}></td>
      <td className='firstName' style={table2}></td>
      <td className='lastName' style={table2}></td>
      <td className='gender' style={table2}></td>
      </tr>
      <tr>
      <th style={table}>Age</th>
      <th style={table}>Phone</th> 
      <th style={table}>Conditions</th>
      <th style={table}>Past Diseases</th>
      </tr>
      <tr>
      <td className='age' style={table2}></td>
      <td className='phone' style={table2}></td>
      <td className='conditions' style={table2}></td>
      <td className='pastDiseases' style={table2}></td>
      </tr>
      <tr>
      <th style={table}>Curr. Medications</th>
      <th style={table}>Genetic Diseases</th>
      <th style={table}>Allergies</th> 
      <th style={table}>Description</th>
      </tr>
      <tr>
      <td className='currMedications' style={table2}></td>
      <td className='geneticDisease' style={table2}></td>
      <td className='allergies' style={table2}></td>
      <td className='description' style={table2}></td>
      </tr> 
      </table>
      </div3>
      <div4 className='row'> 
      <button onClick={this.home.bind(this)} style={button1}>back</button>
      </div4>
      </div1>
      )
  }
}
//export this component to can use
export default Record;

