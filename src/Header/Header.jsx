import './Header.css';
import { NavLink } from 'react-router-dom';
import initial from '../assets/s.webp'
function Header() {
  return <>
  <div className='main-header-container'>
    <div className='name-initial'>
      <img src={initial} alt='initial' className='initial'></img>
      <span>SHREE!</span>
    </div>
    <div className='header-content'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
    </div>
  </div>
  </>;
}
export default Header;
