import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import { Home } from './Home/Home';
import { Aboout } from './About/About';
import { Contact } from './Contact/Contact';
import { Resume } from './resume/Resume';
import { Project } from './Project/Project';
Header
function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<Aboout/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/resume' element={<Resume/>}></Route>
    <Route path='/projects' element={<Project/>}></Route>
   </Routes>
  )
}

export default App
