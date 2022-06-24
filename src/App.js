import Header from './component/Navbar/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import "./App.css";


function App() {
  return (
    <>
        <BrowserRouter>
           <Header />
           <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/projects' element={<Project/>} />
              <Route path='/contact' element={<Contact/>} />
           </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
