import React from 'react';
//to work in ajax
import $ from 'jquery';


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

const number={
	color:'black',
	fontWeight:'bold',
	textAlign:'center',
	fontSize:'25px',
	marginRight:'20px',
};


const button={
	padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};

class Appointment extends React.Component {
	constructor(props){
		super(props);
    //all the data save before sent in state
    this.state={
    	date:'',
    	from: '',
    	to:'',
    	doctorName: '',
    	patientName: '',
    	description:''

    }
}

onWrite1 (e) {
	this.setState({
		date: e.target.value,
	});
};

onWrite2 (e) {
	this.setState({
		from: e.target.value,
	});
};

onWrite3 (e) {
	this.setState({
		to: e.target.value,
	});
};

onWrite4 (e) {
	this.setState({
		doctorName: e.target.value,
	});
};


onWrite5 (e) {
	this.setState({
		patientName: e.target.value,
	});
};

onWrite6 (e) {
	this.setState({
		description: e.target.value,
	});
};

reserve(){
	$.ajax({
      type: 'POST',
      url: '/patientApp',
      data: {
        date: `${this.state.date}`,
        from: `${this.state.from}`,
        to: `${this.state.to}`,
        doctor: `${this.state.doctorName}`,
        patient: `${this.state.patientName}`,
        description: `${this.state.description}`
        },
        success: function () {
        window.location.href= window.location.origin+'/patients'
      },
      error: function(res){
      	console.log(res.responseText)
      	alert(res.responseText)
      }
    })
};




render () {
	return (
		<div style={{textAlign: 'center'}}>
		<h3 className="column" style={number}>
		Date:
		<input  value={this.state.date} onChange={this.onWrite1.bind(this)} placeholder="Date" style={input}>
		</input>
		</h3>

		<h3 style={number}>
		From:
		<input value={this.state.firstName} onChange={this.onWrite2.bind(this)} placeholder="From" style={input}>
		</input>
		</h3>

		<h3 style={number}>
		to:
		<input value={this.state.firstName} onChange={this.onWrite3.bind(this)} placeholder="to" style={input}>
		</input>
		</h3>

		<h3 style={number}>
		Doctor name:
		<input value={this.state.firstName} onChange={this.onWrite4.bind(this)} placeholder="Doctor name" style={input}>
		</input>
		</h3>

		<h3 style={number}>
		Patient name:
		<input value={this.state.firstName} onChange={this.onWrite5.bind(this)} placeholder="Patient name" style={input}>
		</input>
		</h3>

		<h3 style={number}>
		Description:
		<input value={this.state.default} onChange={this.onWrite6.bind(this)} placeholder="Description" style={input}>
		</input>
		</h3>

		<button onClick={this.reserve.bind(this)} style={button}>Reserve</button>

		</div>
		)}

}


export default Appointment;
