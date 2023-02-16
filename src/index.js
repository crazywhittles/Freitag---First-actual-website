
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';
import About from './pages/about/about';
import Cars from './pages/cars/cars';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>  </Route>
        <Route path='/aboutme' element={<About />}></Route>
        <Route path='/junkcars' element={<Cars />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

