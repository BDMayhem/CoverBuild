import React from 'react';
import { Button, DialogContainer, TextField } from 'react-md';

export default class AddLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      newLetter: ''
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  show() {
    this.setState({ visible: true });
  };
  
  hide() {
    this.setState({ visible: false });
  };

  add() {
    this.props.handleAdd(this.state.newLetter);
    this.hide();
  }

  handleChange(event) {
    this.setState({
      newLetter: event
    })
  }
  
  render() {
    const actions = [];
    actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
    actions.push(<Button flat primary onClick={this.add}>Confirm</Button>);

    return (
      <React.Fragment>
        <Button
          raised
          primary
          onClick={this.show}
        >
          New Cover Letter
        </Button>
        <DialogContainer
          id="new-letter-dialog"
          visible={this.state.visible}
          onHide={this.hide}
          actions={actions}
          title="Create a New Cover Letter"
        >
          <TextField
            id="new-letter-dialog-field"
            label="New name"
            placeholder=""
            defaultValue=""
            onChange={this.handleChange}
          />
        </DialogContainer>
      </React.Fragment>
    );
  }
}

