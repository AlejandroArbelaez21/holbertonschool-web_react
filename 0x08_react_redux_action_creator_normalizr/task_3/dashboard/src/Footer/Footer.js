import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

const Footer = () => {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className='App-footer'>
        {value.user.isLoggedIn && <a href='#' data-testid='contact'>Contact us</a>}
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </div>
  )}
  </AppContext.Consumer>
  );
};

export default Footer;
