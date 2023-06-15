import React from 'react'
import Styled from 'styled-components'

const Wrap = Styled.div`
background-color:#ccc;
height:200px;
`
const Title = Styled.h1`
font-size:30px;
text-align:center;
line-height:200px;
color:blue;
`
const Button = Styled.button`
  width:100px;
  height:50px;
  /* background-color:#ccc; */
  background-color:${(props)=>(props.enter ? 'yellow':'#fff')};
  margin:5px;
  color:blue;
  border-radius:5px;
  border-color:${(props)=>(props.aa ? 'blue' : 'black')};
  text-align:center;
  transition:0.3s;
  &:hover{background-color:red;}
`
const FirstButton = Styled(Button)`
  width:150px;
  background-color:aqua;
  color:white;
`

const LinkButton = Styled(FirstButton)`
  display:block;
  text-decoration:none;
`

export default function StyledComponents() {
  return (
    <>
      <Wrap>
        hello, React~
        <Title>Hello</Title>
        <Button aa>Click</Button>
        <Button enter>들어가기</Button>
        <FirstButton>Button</FirstButton>
        <LinkButton as='a' href='http://www.naver.com' target='_blank'>Naver</LinkButton>
      </Wrap>
    </>
  )
}
