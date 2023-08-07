
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from "./scenes/homePage";
import Insights from './scenes/Insights/';
import Calculator from './scenes/Calculator';
import NavBar from './components/Navbar';
import DetailReport from './scenes/DetailReport';
import { useEffect } from 'react';
import ScrollToTop from './scrollToTop';
function App() {
 
  return (
    <>
      
      <BrowserRouter>
      <NavBar />
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/insights' element={<Insights/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/states/:stateName" element={<DetailReport/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
