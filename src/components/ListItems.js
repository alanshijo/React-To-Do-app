import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
        <div className="list" key={item.key}>
          <p>
            <input
              type="text"
              className="editInputBox"
              title="Click to edit"
              id={item.text}
              value={item.text}
              onChange={(e) => {
                props.setUpdate(e.target.value, item.key);
              }}
            />
          </p>
          <span className="trash-icon">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </div>
    );
  });

  return <div>{listItems}</div>;
}

export default ListItems;
