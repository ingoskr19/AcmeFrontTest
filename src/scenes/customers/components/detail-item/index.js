import React, { Component } from 'react';

import '../../../../App.css';

class ItemDetails extends Component {

  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    const item = this.props.item;
    return (
      <div className="input-panel">
      <span className="form-caption">{ item.names + " " + item.lastNames}</span>
      <div><span className="field-name">Document Type:</span><br/> {item.documentType}</div>
      <div><span className="field-name">Document Number:</span><br/> {item.documentNumber}</div>
      <div><span className="field-name">Birth Date:</span><br/> {item.birthDate}</div>
      <br/>
      <button onClick={() => this.onDelete()}>Delete</button> 
      <button onClick={() => this.onEdit()}>Edit</button>
      </div>
    );

  }

  onEdit() {
    this.props.onEdit();
  }

  onDelete() {
    const item = this.props.item;
    if(window.confirm("Are you sure to delete this Customer: " + item.names + " ?")) {
      this.props.onDelete(item.customerId);
    }
  }
}

export default ItemDetails;