import React, {useState} from 'react';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Modal from 'react-bootstrap/Modal';

import './ItemCard.css';

const ItemCard = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <li className="card-item" onClick={handleShow}>
        <div className="card-item-content">
        <div className="card-item-image">
          <div className="card-item-icon">
            <MenuBookTwoToneIcon className="book-icon"/>
          </div>
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

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> 
        </Modal.Header> */}
        <div className="modal-item-image">
          <div className="modal-item-icon">
            <MenuBookTwoToneIcon className="book-icon"/>
          </div>
        </div>
          <h3 class="modal-title">
          To Kill a Mokingbird
            {/* {props.title} */}
          </h3>
        {/* </Modal.Header> */}
        <Modal.Body>
            <ul>
              <li>Author(s):
              {/* {props.author} */}</li>
              <li>Year_Of_Publication:
              {/* {props.Year_Of_Publication} */}</li>
              <li>ISBN:
              {/* {props.ISBN} */}</li>
              <li>Copies:
              {/* {props.copies} */}</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
        <button className="card-item-button" onClick={handleClose}>   
          CLOSE
        </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ItemCard;
