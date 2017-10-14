import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';
import photo from './party.png';

const Component = ({welcomeMessage}) => (
  <div>
    <img src={photo} className='photo-center' />
    <h1 className='greeting-center'> {welcomeMessage} </h1>
  </div>
);

Component.propTypes = {
  welcomeMessage: PropTypes.string.isRequired
};

export default Component

