
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './Components/SignInPage/Body/Body';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Body/>
      </div>
    </BrowserRouter>
  );
}

export default App;
