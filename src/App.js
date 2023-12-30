import React from 'react'
import './App.scss';
import { Routes, Route, useLocation}  from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Skills from './Pages/skills';
import Portfolio from './Pages/portfolio';
import Navbar from './comp/navebar';
import Background from './utils/Background';


function App() {

  const location = useLocation();
  const renderHome = location.pathname === "/";
  

  return (
    <div className="App">
    {
      renderHome &&
      <Background/>
    }

    <Navbar/>

    <div className="App__main-page-content">
      <Routes>
        <Route index path='/'element={<Home/>} />
        <Route  path='/about'element={<About/>} />
        <Route  path='/skills'element={<Skills/>} />
        <Route  path='/portfolio'element={<Portfolio/>} />
      </Routes>
    </div>
    
      
    </div>
  );
}

export default App;
