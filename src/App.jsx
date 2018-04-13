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
      currentLetter: 0,
      letterCounter: 1,
      letters: [
        {
          name: 'Default',
          first: '',
          last: '',
          company: '',
          position: '',
          text: 'I am <first> <last> and I want to be <position> at <company>',
          key: 0,
        },
      ]
    }

    this.updateForm = this.updateForm.bind(this)
    this.changeLetter = this.changeLetter.bind(this)
    this.newLetter = this.newLetter.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
  }

  updateForm(event) {
    const currentIndex = this.state.letters.findIndex(i => i.key === this.state.currentLetter);
    let newLetters = this.state.letters;

    newLetters[currentIndex][event.target.name] = event.target.value;

    this.setState({
      letters: newLetters
    }, () => localStorage.setItem('letters', JSON.stringify(this.state)));
  }

  changeLetter(event) {
    const currentLetter = this.state.letters.find((e) => e.name === event.target.textContent)
    this.setState({
      currentLetter: currentLetter.key
    }, () => {localStorage.setItem('letters', JSON.stringify(this.state))})
  }

  newLetter(name) {
    const currentIndex = this.state.letters.findIndex(i => i.key === this.state.currentLetter);
    let letters = this.state.letters;
    letters.push({
      name,
      first: this.state.letters[currentIndex].first,
      last: this.state.letters[currentIndex].last,
      company: this.state.letters[currentIndex].company,
      position: this.state.letters[currentIndex].position,
      text: this.state.letters[currentIndex].text,
      key: this.state.letterCounter
    });

    this.setState({
      letters,
      currentLetter: this.state.letterCounter,
      letterCounter: this.state.letterCounter + 1,
    }, () => {
      localStorage.setItem('letters', JSON.stringify(this.state))
    })
  }

  deleteLetter() {
    const letters = this.state.letters;
    const toDelete = this.state.letters.findIndex(i => i.key === this.state.currentLetter);
    letters.splice(toDelete, 1);

    this.setState({
      letters,
      currentLetter: this.state.letters[0].key
    }, () => {
      localStorage.setItem('letters', JSON.stringify(this.state))
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
    const currentIndex = this.state.letters.findIndex(i => i.key === this.state.currentLetter);

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
              letter={this.state.letters[currentIndex]} 
              onFormChange={this.updateForm}
              changeLetter={this.changeLetter}
              newLetter={this.newLetter}
              deleteLetter={this.deleteLetter}
            />
          </Cell>
          <Cell
            size={6}
            tabletSize={8}
          >
            <Page letter={this.state.letters[currentIndex]}/>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
