import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Beranda from './pages/Beranda';
import About from './pages/About';
import Kontak from './pages/Kontak';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Kontak' element={<Kontak/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
