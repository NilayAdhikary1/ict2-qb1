import './App.css';
import { BrowserRouter,Outlet,Route, Routes } from 'react-router-dom';
import Body from './Components/SignInPage/Body/Body';
import Home from '../src/Components/HomePage/Home'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({userAuthenticated, ...props}) => {
  return userAuthenticated?
  <Outlet/>
:
  <Navigate replace to='/login'/>
}

function App() {

  const [userAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Body isUserAuthenticated={isUserAuthenticated}/>} />
          
          <Route path='/' element={<PrivateRoute userAuthenticated={userAuthenticated}/>}>
            <Route path='/' element={<Home/>}/>
          </Route> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;