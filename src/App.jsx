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
      currentLetter: 1,
      letterCounter: 2,
      letters: [
        {
          name: 'default',
          first: '',
          last: '',
          company: '',
          position: '',
          text: 'I am <first> <last> and I want to be <position> at <company>',
          key: 0,
        },
        {
          name: 'WebDev',
          first: 'Brian',
          last: 'Diaz',
          company: 'Google',
          position: 'Web Developer',
          text: 'I am <first> <last> and I want to be <position> at <company>',
          key: 1,
        }
      ]
    }

    this.updateForm = this.updateForm.bind(this)
    this.changeLetter = this.changeLetter.bind(this)
  }

  updateForm(event) {
    let newLetters = this.state.letters;

    newLetters[this.state.currentLetter][event.target.name] = event.target.value;

    this.setState({
      letters: newLetters
    }, () => localStorage.setItem('letters', JSON.stringify(this.state)));
  }

  changeLetter(event) {
    const currentLetter = this.state.letters.find((e) => e.name === event.target.textContent)
    console.log(currentLetter.key)
    this.setState({
      currentLetter: currentLetter.key
    })
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
              letters={this.state.letters}
              letter={this.state.letters[this.state.currentLetter]} 
              onFormChange={this.updateForm}
              changeLetter={this.changeLetter}
            />
          </Cell>
          <Cell
            size={6}
            tabletSize={8}
          >
            <Page letter={this.state.letters[this.state.currentLetter]}/>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
