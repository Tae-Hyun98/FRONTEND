// import logo from './logo.svg';
import './App.css';
import Shop from './pages/Shop';
import Header from './pages/Header';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  font-size: 3em;
  padding: 30px 0;
  font-weight: 700;
`

const H2 = styled.h2`
  text-align: center;
  font-size: 2em;
  padding: 20px 0;
`
function App() {
  return (
    <div className='wrap'>
      
      <Header/>
      <H1 className='logo'>삼진어묵</H1>
      
      <section className='visual_main'>
        <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt='visual_main' width='100%'/>
      </section>

      <H2>BEST 상품</H2>

      <Shop/>

    </div>
  );
}

export default App;
