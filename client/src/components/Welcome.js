/* eslint-disable semi */
import React from 'react';
import mainImage from './imgs/3.webp';

const Welcome = () =>
    <div className="welcome--container">
        <h2 className="welcome--message-text">Welcome to Shark Coffe</h2>
        <p className="welcome--description-text">Drink Coffe, read, drink coffe, read, repeat</p>
        {/* <img src={mainImage} alt="coffe shop image"/> */}
    </div>

export default Welcome;
