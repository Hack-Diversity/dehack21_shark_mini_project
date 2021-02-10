import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './ItemCard.css';

const ItemCard = props => {
  return (
    <React.Fragment>
      <li className="card-item">
        <div className="card-item-content">
          <div className="card-item-icon">
            <MenuBookIcon classname="book-icon"/>
          </div>
          <div className="card-item-info">
            <h3>
            To Kill a Mokingbird
            {/* {props.title} */}
            </h3>
            <h6>Harper Lee
            {/* {props.author} */}
            </h6>
            <p>Copies: 2
            {/* {props.copies} */}
            </p>
          </div>
          <div className="card-item-buttons">
            <button className="card-item-button">
              BORROW
            </button>
            <button className="card-item-button">
              RETURN
            </button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ItemCard;
