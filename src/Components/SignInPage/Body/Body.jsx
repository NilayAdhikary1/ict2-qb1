import React from 'react';
import Banner from './Banner';
import LogIn from './LogIn';
import './Body.css';
import Footer from '../Footer/Footer';

function Body() {
  return (
    <>
      <div className='container1'>
          <div className="row justify-content-center child">
              <Banner/>
              <LogIn/>
          </div>
      </div>

      <div className="container2 mt-4">
        <div className="row">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Body