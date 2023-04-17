
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Body from './Components/SignInPage/Body/Body';
import Home from '../src/Components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Body />}/>
          <Route path='/' element={<Home />}/>    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
