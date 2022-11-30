import logo from './logo.svg';
import './App.css';

import AllAirports from './Components/AllAirports';
import AddAirport from './Components/AddAirport';
import EditAirport from './Components/EditAirports';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome /> } />
        <Route path="/all" element={<AllAirports /> } />
        <Route path="/add" element={<AddAirport />} />
        <Route path="/edit/:id" element={<EditAirport />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
