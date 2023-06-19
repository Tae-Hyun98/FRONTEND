import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import styled from 'styled-components'

const Li = styled.li`
  list-style: none;
  font-size: 12px;
  margin-right: 10px;
  &:last-child{
    margin-right: 0;
  }
`
export default function Header() {
  return (
    <>
      <header className='header'>
        <nav>
          <ul>
            <Li><Link to='/'>Home</Link></Li>
            <Li><Link to='login'>로그인</Link></Li>
            <Li><Link to='sub'>장바구니</Link></Li>
            <Li>검색</Li>
          </ul>
        </nav>
        <h1>라우팅연습</h1>
      </header>
    </>
  )
}
