import React, { Component } from 'react';
import '../styles/Form.css';
import { TextField } from 'react-md';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, event) {
    this.props.onFormChange(event)
  }

  render() {
    return (
      <div className="form">
        <div className="md-grid">
          <TextField
            name="first"
            id="firstName"
            label="First Name <first>"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
            />
          <TextField
            name="last"
            id="lastName"
            label="Last Name <last>"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
          />
        </div>
        <div className="md-grid">
          <TextField
            name="company"
            id="company"
            label="Company Name <company>"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
            />
          <TextField
            name="position"
            id="position"
            label="Position Title <position>"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
          />
        </div>
        <TextField
          name="text"
          id="text"
          label="Type many letters"
          lineDirection="right"
          rows={5}
          maxRows={0}
          value={this.props.stuff.text}
          className="md-cell md-cell--bottom"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
