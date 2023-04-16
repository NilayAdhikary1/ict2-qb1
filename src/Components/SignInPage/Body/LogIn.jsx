import React from 'react';
import Logo_Desktop_Tab from '../../Images/Logo_Desktop_Tab.png';
import './LogIn.css';

function LogIn() {
  return (
    <div className='col-md-5 col-lg-5 logInCol'>
        <img src={Logo_Desktop_Tab} alt="Hello world" />

        <form className='cover mt-4'>
            <div className="mt-3 mb-3">
                <h3 className='signInText'>Sign In</h3>
            </div>
            
            <div className="mb-4">
                <input type="text" className="form-control form-control-lg size" id="exampleInputUserName" placeholder='User Name' aria-describedby="userNameHelp"/>
                
            </div>
            <div className="mb-3">
                <input type="password" className="form-control form-control-lg size" id="exampleInputPassword" placeholder='Password'/>
            </div>

            <div className="mb-4">
                <a className='forgot' href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="logInBtn">SIGN IN</button>
        </form>
    </div>
  )
}

export default LogIn