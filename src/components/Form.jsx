import React, { Component } from 'react';
import '../styles/Form.css';
import { TextField, Grid } from 'react-md';

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
        <Grid>
          <TextField
            name="first"
            id="firstName"
            label="First Name"
            className="md-cell md-cell--bottom md-cell--6 md-cell--4-tablet"
            value={this.props.letter.first}
            onChange={this.handleChange}
            />
          <TextField
            name="last"
            id="lastName"
            label="Last Name"
            className="md-cell md-cell--bottom md-cell--6 md-cell--4-tablet"
            value={this.props.letter.last}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid>
          <TextField
            name="company"
            id="company"
            label="Company Name"
            className="md-cell md-cell--bottom md-cell--6 md-cell--4-tablet"
            value={this.props.letter.company}
            onChange={this.handleChange}
            />
          <TextField
            name="position"
            id="position"
            label="Position Title"
            className="md-cell md-cell--bottom md-cell--6 md-cell--4-tablet"
            value={this.props.letter.position}
            onChange={this.handleChange}
          />
        </Grid>
        <TextField
          name="text"
          id="text"
          label="Cover Letter Text - Use <first>, <last>, <company>, and <position>"
          lineDirection="right"
          rows={5}
          maxRows={0}
          value={this.props.letter.text}
          className="md-cell md-cell--bottom md-cell--12"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
