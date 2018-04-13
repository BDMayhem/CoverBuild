import React from 'react';
import { Button, DialogContainer } from 'react-md';

export default class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.delete = this.delete.bind(this);
  }

  show() {
    this.setState({ visible: true });
  };
  
  hide() {
    this.setState({ visible: false });
  };

  delete() {
    this.props.handleDelete();
    this.hide();
  }
  
  render() {
    const actions = [];
    actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
    actions.push(<Button flat primary onClick={this.delete}>Confirm</Button>);

    return (
      <React.Fragment>
        <Button
          flat
          primary
          onClick={this.show}
        >
          Delete Cover Letter
        </Button>
        <DialogContainer
          id="new-letter-dialog"
          visible={this.state.visible}
          onHide={this.hide}
          actions={actions}
          title="Delete Cover Letter"
        >
        </DialogContainer>
      </React.Fragment>
    );
  }
}

