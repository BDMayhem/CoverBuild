import React, { Component } from 'react';
import '../styles/Page.css';
import { Paper } from 'react-md';

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <Paper>
            {this.props.stuff.first}
            {this.props.stuff.last}
            {this.props.stuff.company}
            {this.props.stuff.position}
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
