import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Profile from './Profile';

export default function Members() {
  return (
    <>
      <h3>회원 리스트</h3>
      <ul>
        <li><Link to='/members/soonsin'>soonsin</Link></li>
        <li><Link to='/members/gildong'>gildong</Link></li>
      </ul>

      <hr/>

      <Routes>
        <Route path='/*' element={<div>사용자를 선택해주세요</div>}/>
        <Route path=':userName' element={<Profile/>}/> 
        {/* path로 값넘기는거같음 */}
      </Routes>
    </>      
  )
}
