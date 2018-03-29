import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Form from './components/Form';
import Page from './components/Page';
import { Grid, Cell } from 'react-md';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      company: '',
      position: '',
      text: 'I am <first> <last> and I want to be <position> at <company>'
    }

    this.updateForm = this.updateForm.bind(this)
  }

  updateForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Grid>
          <Cell
            size={6}
            tabletSize={8}
          >
            <Form
              stuff={this.state} 
              onFormChange={this.updateForm}
            />
          </Cell>
          <Cell
            size={6}
            tabletSize={8}
          >
            <Page stuff={this.state}/>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
