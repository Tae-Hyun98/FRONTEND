// import logo from './logo.svg';
import './App.css';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="Wrap">
      <img src={process.env.PUBLIC_URL + './images/visual_main_01.jpg'} alt='vm' width='100%'/>
      <Shop/>
    </div>
  );
}

export default App;
