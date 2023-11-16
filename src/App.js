import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Products from './components/Products';
import Login from './components/Login';
import Contact from './components/Contact';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
        <BrowserRouter>
            <Alert alert={alert}/>
            <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>

    </>
  );
}

export default App;
