import React from 'react';
//to work in ajax
import $ from 'jquery';

class Patient extends React.Component {
	constructor(){
		super();
		this.state={
			info:[]
		}
	}

	componentDidMount() {
    console.log('hi',this.state.info);
    const that=this
    $.ajax({
      type: 'GET',
      url: '/info',
      success: function (res) {
      	console.log('hh',res)
      	that.setState({info:res })
   	
      }
  })
	}


	add (){
		window.location.href= window.location.origin+'/appointment'
	}


	update (){
		window.location.href= window.location.origin+'/patientProfile'
	}

	logout(){
    console.log('you try to logout');
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/logout',
      //when success do this
      success: function (res) {
        alert(res);
        that.setState({loggedIn:false});
        window.location.href= window.location.origin+'/login'
      },
      //when error do this
      error: function (){
        alert('Failed logout please try again ');
        console.log('Failed logout please try again ');
      },
    }) 
   }


	render() {
		return (
			<div>
			<button onClick={this.add.bind(this)}>Reserve an appointment</button>
			<button onClick={this.logout.bind(this)}>Log Out</button>
			<button onClick={this.update.bind(this)}>Update your Profile</button>
			<div style={{textAlign: 'center'}} >
			Summary of my last visits:
				{this.state.info.map((obj)=>
					
					<div style={{borderStyle: 'solid'}}> <h3> Medical History:{obj.history} </h3> <h3> Assessment and Plan:{obj.description} </h3> <h3> Medications: {obj.medications}</h3> </div>)
				}

			</div>

			</div>
			)
	}

}

export default Patient