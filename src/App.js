import './App.css';
import './index.css'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Connect from './Components/Connect';
import Intro from './Components/Intro';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="home">
          <div className="intro">
            <Intro/>
          </div>
          <div className="about">
            <About/>
          </div>
          <div className="connect">
            <Connect/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
