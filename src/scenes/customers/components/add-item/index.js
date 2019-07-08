import React, { Component } from 'react';

import '../../../../App.css';

import FormValidator from './../../helper/formValidator';

class AddItem extends Component {

  constructor(props) {

    super(props);

    this.validator = new FormValidator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      customerId: '',
      names: '',
      lastNames: '',
      birthDate: '',
      documentType: '',
      documentNumber: '',
    };

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onCancel() {
    this.props.onCancel();
  }

  onSubmit() {
    if(this.validator.validateInputs(this.state)) {
        this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">Create Costumer:</span>
      <div>
        <label className="field-name">Name:<br/>
          <input value={this.state.names} name="names" maxLength="30" required onChange={this.handleInputChange} placeholder="item name" />
        </label>
      </div>
      <div>
        <label className="field-name">Last Names:<br/>
          <input value={this.state.lastNames} name="lastNames" maxLength="30" required onChange={this.handleInputChange} placeholder="Last Names" />
        </label>
      </div>
      <div>
        <label className="field-name">Document Type:<br/>
          <input value={this.state.documentType} name="documentType" maxLength="4" pattern="[0-9]{1,4}" onChange={this.handleInputChange} placeholder="Document Type" />
        </label>
      </div>
      <div>
        <label className="field-name">Document Number:<br/>
          <input value={this.state.documentNumber} name="documentNumber" maxLength="50" pattern="[a-z|A-Z]{2}" onChange={this.handleInputChange} placeholder="Document Number" />
        </label>
      </div>
      <div>
        <label className="field-name">BirthDate:<br/>
          <input value={this.state.birthDate} name="birthDate" onChange={this.handleInputChange} placeholder="Birth Date" />
        </label>
      </div>
      <br/>
      <button onClick={() => this.onCancel()}>Cancel</button> 
      <button onClick={() => this.onSubmit()}>Create</button>
      </div>
    );

  }

}

export default AddItem;