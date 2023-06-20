import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/productData';
import About from './pages/About';
import Detail from './pages/Detail';

import {useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  width: 50%;
  height: 50px;
  color: #000;
  font-weight: 700;
  border: 1px solid #ccc;
  &:hover{
    background-color: #ccc;
  }
`

function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)  //useState로 상태관리

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Samjin_Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Infomation</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/loca')}}>Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={

        <Container>
          <img className='visual_main' src={process.env.PUBLIC_URL+'./images/visual_main_01.jpg'} alt='vm'/>
          <h2 className='best_tit'>Best 상품</h2>
          <Row>
            {
              bests.map((best,index)=>{
                return(
                  <Col key={index} className='box'>
                    <Link to={`detail/${index}`}>
                      <img className={best.id} src={best.image} alt='product_Img'/>
                      <div className='desc'>
                        <p className='tit'>{best.title}</p>
                        <p>{best.desc}</p>
                        <p className='price'>{best.price}</p>
                      </div>
                      
                      <div className='btn'>
                        <Button>장바구니</Button>
                        <Button>구매하기</Button>
                      </div>
                    </Link>
                   
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      
      }/>

        <Route path='about' element={<About/>}>
          <Route path='info' element={<div>Infomation</div>}/>
          <Route path='loca' element={<div>Location</div>}/>
        </Route>

        <Route path='detail/:id' element={<Detail bests={bests}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
