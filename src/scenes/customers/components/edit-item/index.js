import React, { Component } from 'react';
import '../../../../App.css';

import FormValidator from './../../helper/formValidator';

class EditItem extends Component {

  constructor(props) {

    super(props);
    this.validator = new FormValidator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    const itemToEdit = props.item;

    this.state = {
      customerId: itemToEdit.customerId,
      names: itemToEdit.names,
      lastNames: itemToEdit.lastNames,
      birthDate: itemToEdit.birthDate,
      documentType: itemToEdit.documentType,
      documentNumber: itemToEdit.documentNumber,
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

    if (this.validator.validateInputs(this.state)) {
      this.props.onSubmit(this.state);
    }

  }

  render() {

    return (

      <div className="input-panel">
      <span className="form-caption">Editing Customer:</span> <span>{this.state.names + " "+this.state.lastNames}</span>
      <div>
        <label className="field-name">Names:<br/>
          <input value={this.state.names} name="names" maxLength="30" required onChange={this.handleInputChange} placeholder="Names" />
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
          <textarea value={this.state.birthDate} name="birthDate" onChange={this.handleInputChange} placeholder="Birth Date" />
        </label>
      </div>
      <br/>
      <button onClick={() => this.onCancel()}>Cancel</button> 
      <button onClick={() => this.onSubmit()}>Update</button>
      </div>
    );

  }

}

export default EditItem;