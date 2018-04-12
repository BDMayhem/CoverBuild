import React from 'react';
import { Button, MenuButton, ListItem } from 'react-md';


const Buttons = (props) => {
  const beenClicked = (event) => {
    event.preventDefault();
    props.handleSelect(event)
  }

  return(
  <React.Fragment>
    <Button raised primary>
      New Cover Letter
    </Button>
    <MenuButton
      id="choose-letter"
      raised
      secondary
      menuItems={props.menuItems.map((e) => (
        <ListItem
          key={e.key}
          primaryText={e.name}
          onClick={beenClicked}
        />
      ))}
      simplifiedMenu={false}
    >
      Click
    </MenuButton>
  </React.Fragment>
)}

export default Buttons;