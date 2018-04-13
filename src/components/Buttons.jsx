import React from 'react';
import { MenuButton, ListItem } from 'react-md';
import AddLetter from './AddLetter';
import DeleteButton from './DeleteButton';

const Buttons = (props) => {
  const switchLetter = (event) => {
    event.preventDefault();
    props.handleSelect(event);
  }

  const handleAdd = (name) => {
    props.handleAdd(name);
  }

  const handleDelete = () => {
    props.handleDelete()
  }

  return(
  <React.Fragment>
    <AddLetter handleAdd={handleAdd} />
    {props.menuItems.length > 1 && 
      <React.Fragment>
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
        <DeleteButton
          menuItems={props.menuItems}
          handleDelete={handleDelete}
        />
      </React.Fragment>
    }
  </React.Fragment>
)}

export default Buttons;