import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Home/>}/>
      <Route path='/sessions' element={<Home/>}/>
      <Route path='/ourTeam' element={<Home/>}/>
      <Route path='/contact' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
