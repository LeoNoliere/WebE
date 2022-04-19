import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import Intro from './Components/NavBar/Intro.js';
import Main from './Components/NavBar/Main.js';
import About from './Components/NavBar/About.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Intro/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    );
}

export default App;
