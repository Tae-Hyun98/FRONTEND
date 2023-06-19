// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Members from './components/Members';


function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='members'>Members</Link></li>
      </ul>

      <hr/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='members/*' element={<Members/>}/>
      </Routes>
    </>
  );
}

export default App;
