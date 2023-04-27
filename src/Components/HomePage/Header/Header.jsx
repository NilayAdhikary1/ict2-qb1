import React from 'react';
import { useState } from 'react';
import Logo_Desktop_Tab from '../../Images/Logo_Desktop_Tab.png';
import Logo_Mobile from '../../Images/Logo_Mobile.png';
import './Header.css';
import Close from '../../Images/Close.png';

function Header() {

    const [prevState, changePrevState] =useState(true);

    const clickHandler = (event) => {
        changePrevState(!prevState);
    }

    return (
        <div className="row justify-content-between">
            <div className="col-md-2 col-lg-3 col-sm-12 img">
                <picture>
                    <source media="(min-width: 576px)" srcset={Logo_Desktop_Tab}/>
                    <source media="(min-width: 768px)" srcset={Logo_Desktop_Tab}/>
                    <source media="(min-width: 992px)" srcset={Logo_Desktop_Tab}/>
                    
                    <img src={Logo_Mobile} alt="A cute kitten"/>
                </picture>
            </div>

            <div className='col-md-8 col-lg-8 col-sm-12'>
                <nav className="navbar navbar-expand-lg navbar-expand-md">
                    <div className="container-fluid">
                        
                        <button onClick={clickHandler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {prevState?
                                <span className="navbar-toggler-icon"></span>
                            :   
                                <span><img src={Close} alt="cancel button"/></span>
                            }
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