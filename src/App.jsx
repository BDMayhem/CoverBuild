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
    this.save = this.save.bind(this)
  }

  save() {
    localStorage.setItem('letters', JSON.stringify(this.state));
  }

  updateForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, this.save);
  }

  componentDidMount() {
    //populate localstorage with initial data
    if (localStorage['letters'] === undefined) {
      localStorage.setItem('letters', JSON.stringify(this.state));
    }
    
    //populate state with localstorage data
    this.setState(JSON.parse(localStorage['letters']));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Grid className="main">
          <Cell
            size={6}
            tabletSize={8}
          >
            <Form
              letter={this.state} 
              onFormChange={this.updateForm}
            />
          </Cell>
          <Cell
            size={6}
            tabletSize={8}
          >
            <Page letter={this.state}/>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
