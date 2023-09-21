import './App.css';
import Navbar from './components/Navbar';
import About from './routes/About';
import Home from './routes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
