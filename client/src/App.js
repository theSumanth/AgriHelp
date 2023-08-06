
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./scenes/homePage";
import Insights from './scenes/Insights/';
import Calculator from './scenes/Calculator';
import NavBar from './components/Navbar';
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/insights' element={<Insights/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
