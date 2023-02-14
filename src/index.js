
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';
import About from './pages/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>  </Route>
        <Route path='/aboutme' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

