import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import HashGenerator from './components/hash-generator/HashGenerator';
import PasswordGenerator from './components/password-generator/PasswordGenerator';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/hash-generator' element={<HashGenerator />} />
        <Route path='/password-generator' element={<PasswordGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





