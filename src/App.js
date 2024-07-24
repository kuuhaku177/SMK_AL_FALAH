import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './page/Home'; 
import Profil from './page/Profil';
import Pengumuman from './page/Pengumuman';
import Fasilitas from './page/Fasilitas';
import Guru from './page/Guru';
import Artikel from './page/Artikel';

function App() {
  return (
    <Router> 
      <div>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Profil" element={<Profil />} /> 
         <Route path="/Pengumuman" element={<Pengumuman/>} />
         <Route path="/Fasilitas" element={<Fasilitas/>} />
         <Route path="/Guru" element={<Guru/>} />
         <Route path='/articles/:id' element={<Artikel />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;