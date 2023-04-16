import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
        <div className='col-lg-3 col-md-4'>
            <p className='foot-text'>Need Help? <a className='chat' href="#">Chat With Us</a></p>
        </div>
        <div className='col-lg-3 col-md-4'>
            <p className='foot-text'>Copyright &copy; 2021. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer