import React from 'react';
import Logo_Desktop_Tab from '../../Images/Logo_Desktop_Tab.png';
import './Header.css'

function Header() {
  return (
    <div className="row justify-content-between">
        <div className="col-md-2 col-lg-3 col-sm-7 img">
            <img src={Logo_Desktop_Tab} alt="Hello world" />
        </div>

        <div className='col-md-8 col-lg-8 col-sm-2'>
            <nav className="navbar navbar-expand-lg navbar-expand-md">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 ms-2">
                            <li className="nav-item ">
                                <a id='home' className="nav-link" aria-current="page" href=".">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">FACULTIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header