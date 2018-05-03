//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';

import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from "react-bootstrap";




class Search extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state = {
      value: '',
      val: ''
    };

    this.inputChange  = this.inputChange.bind(this);

  }

  handleInputChange(e) {
    this.props.searchPateint(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  render () {
    return (

<div id="patient" className="search-bar form-inline container">

      <FormControl
          id='patI'
          className="Sform-control"
          type="text"
          value={this.state.value}
          onChange={this.inputChange}
          placeholder="Patient Name"
        />
        <br /><br />
      </div>

      )
  }
}
export default Search;