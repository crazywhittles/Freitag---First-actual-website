
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';
import About from './pages/about/about';
import Cars from './pages/cars/cars';
import People from './pages/people/people';
import Contact from './pages/contact/contact';
import Channels from './pages/channels/channels';
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
        <Route path='/people' element={<People />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/channels' element={<Channels />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

