import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './components/main';
import Home from './components/Home';
import Sub from './components/Sub';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='login' exact element={<Home/>}/>
        <Route path='sub' exact element={<Sub/>}/>
      </Routes>
      
    </>
  );
}

export default App;
