import React, { useState } from 'react';
import Logo_Desktop_Tab from '../../Images/Logo_Desktop_Tab.png';
import './LogIn.css';
import { data } from '../../Constants/logInData';
import { useNavigate } from 'react-router-dom';

function LogIn({isUserAuthenticated}) {

    const userData = {
        userName : '',
        userPassword : ''
    };

    const [input, setInput] = useState(userData);
    const navigate = useNavigate();

    const inputHandler = (event) =>  {
        setInput({
            ...input, [event.target.name] : event.target.value
        });
    }

    const validateUser = (event) => {
        if(data[0].userName === input.userName && data[1].userPassword === input.userPassword){
            console.log("Yes the user is valid");
            isUserAuthenticated(true);
            navigate('/');
        }
        else{
            console.log("No the user is not valid");
            isUserAuthenticated(false);
        }
        event.preventDefault();
    }

  return (
    <div className='col-md-5 col-lg-5 logInCol'>
        <img src={Logo_Desktop_Tab} alt="Hello world" />

        <form className='cover mt-4'>
            <div className="mt-3 mb-3">
                <h3 className='signInText'>Sign In</h3>
            </div>
            
            <div className="mb-4">
                <input type="text" onChange={inputHandler} className="form-control form-control-lg size" name="userName" placeholder='User Name' aria-describedby="userNameHelp"/>
                
            </div>
            <div className="mb-3">
                <input type="password" onChange={inputHandler} className="form-control form-control-lg size" name="userPassword" placeholder='Password'/>
            </div>

            <div className="mb-4">
                <a className='forgot' href="...">Forgot Password?</a>
            </div>

            <button onClick={validateUser} type="submit" className="logInBtn">SIGN IN</button>
        </form>
    </div>
  )
}

export default LogIn