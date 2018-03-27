import React, { Component } from 'react';
import '../styles/Page.css';
import { Paper } from 'react-md';

class Page extends Component {
  render() {
    const first = this.props.stuff.first;
    const last = this.props.stuff.last;
    const company = this.props.stuff.company;
    const position = this.props.stuff.position;
    const text = this.props.stuff.text;

    const newtext = text.replace(/<first>/, first)
                        .replace(/<last>/, last)
                        .replace(/<company>/, company)
                        .replace(/<position>/, position);
                        
    console.log(newtext)

    return (
      <React.Fragment>
        <div className="page">
          <Paper>
            {newtext}
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
