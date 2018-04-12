import React from 'react';
import { MenuButton, ListItem } from 'react-md';
import AddLetter from './AddLetter';


const Buttons = (props) => {
  const switchLetter = (event) => {
    event.preventDefault();
    props.handleSelect(event);
  }

  const handleAdd = (name) => {
    props.handleAdd(name);
  }

  return(
  <React.Fragment>
    <AddLetter handleAdd={handleAdd} />
    <MenuButton
      id="choose-letter"
      raised
      secondary
      menuItems={props.menuItems.map((e) => (
        <ListItem
          key={e.key}
          primaryText={e.name}
          onClick={switchLetter}
        />
      ))}
      simplifiedMenu={false}
    >
      Switch Cover Letters
    </MenuButton>
  </React.Fragment>
)}

export default Buttons;