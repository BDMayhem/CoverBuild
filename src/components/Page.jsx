import React, { Component } from 'react';
import '../styles/Page.css';
import { Paper } from 'react-md';

class Page extends Component {
  render() {
    const first = this.props.letter.first;
    const last = this.props.letter.last;
    const company = this.props.letter.company;
    const position = this.props.letter.position;
    const text = this.props.letter.text;

    const newtext = text.replace(/<first>/g, first)
                        .replace(/<last>/g, last)
                        .replace(/<company>/g, company)
                        .replace(/<position>/g, position);
                        
    return (
      <React.Fragment>
        <div className="page">
          <h2>{this.props.letter.name} Cover Letter</h2>
          <Paper>
            {newtext}
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
