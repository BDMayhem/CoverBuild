import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Form from './components/Form';
import Page from './components/Page';

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
        <main>
          <Form
            stuff={this.state} 
            onFormChange={this.updateForm}
          />
          <Page stuff={this.state}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
