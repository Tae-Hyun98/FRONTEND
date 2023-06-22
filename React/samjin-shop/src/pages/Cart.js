import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeYear } from './store';

export default function Cart() {

  // const state = useSelector((state)=>{return state})
  const state = useSelector((state)=>state) //useSelector는 store에 있는 state를 가져오는 Hooks
  const dispatch = useDispatch()

  return (
    <div style={{textAlign:'center'}}>
      <h2><span style={{color:'blue', fontWeight:'bold'}}>{state.user.name}</span>님의 장바구니</h2>
      <button onClick={()=>dispatch(changeName())}>닉네임보이기</button>
      <h3>회원가입기간 : {state.user.memberYear}년</h3>
      <button style={{width:50}} onClick={()=>dispatch(changeYear(1))}>+</button>
      <button style={{width:50}} onClick={()=>dispatch(changeYear(-1))}>-</button>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>토마토</td>
          <td>2</td>
          <td>@mdo</td>
        </tr>
       
        
      </tbody>
    </Table>
    </div>
  )
}
