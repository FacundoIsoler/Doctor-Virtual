import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store.js';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart.js';
import PatientForm from './Components/PatientForm/PatientForm.js';
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagodeservicio" element={<Cart />} />
          <Route path="/formdepaciente" element={<PatientForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
