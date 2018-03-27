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
            label="Last Name"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
          />
        </div>
        <div className="md-grid">
          <TextField
            name="company"
            id="company"
            label="Company Name"
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
            />
          <TextField
            name="position"
            id="position"
            label="Position Title"
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
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          className="md-cell md-cell--bottom"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
