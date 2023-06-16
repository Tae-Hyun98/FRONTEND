import React from 'react'
import styled, { keyframes } from 'styled-components'

const Div=styled.div`
  overflow: hidden;
`

const Wrap = styled.div`
background-color:#ccc;
height:200px;
`
const Title = styled.h1`
font-size:30px;
text-align:center;
line-height:200px;
color:blue;
`
const Button = styled.button`
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
const FirstButton = styled(Button)`
width:150px;
background-color:aqua;
color:white;
`

const LinkButton = styled(FirstButton)`
display:block;
text-decoration:none;
`

const Input = styled.input`
padding: 8px;
margin:10px;
background-color: yellow;
border-radius: 5px;
/* color: ${(props)=>props.inputColor ? props.inputColor:'blue'}; */
color:${(props)=>props.inputColor||'blue'}; //inputColor가 value로 있으면 그대로쓰고 아니면 blue
`

const FirstInput = styled.input.attrs((props) => ({
  type:'text',
  size:props.size||'16px' //size가 입력되있으면 입력값쓰고 아니면 16px로
}))`
  color:blue;
  font-size:${(props)=>props.size};
`

const rotate = keyframes`    //styledcomponent에서는 키프레임 다른변수에 지정해놓고 불러야된다.
  0%{transform:rotate(0deg);}
  100%{transform:rotate(180deg);}
`

const Rotate = styled.div`
  display: inline-block;
  width: 100%;
  animation: ${rotate} 10s infinite linear;
  font-size: 50px;
  font-weight: 700;
  color: blue;
  text-align: center;
`

export default function StyledComponents() {
  return (
  <>
    <Div>
      <Wrap>
        hello, React~
        <Title>Hello</Title>
      </Wrap>

      <Button aa>Click</Button>
      <Button enter>들어가기</Button>
      <FirstButton>Button</FirstButton>
      <LinkButton as='a' href='http://www.naver.com' target='_blank'>Naver</LinkButton>
      <br />
      <Input type='text' defaultValue='input_txt' />
      <Input type='text' defaultValue='input_txt' inputColor='red'/>
      <FirstInput placeholder='font-size' size='' />
      <FirstInput placeholder='font-size' size='30px' />
      <br/>
      <Rotate>*</Rotate>
      </Div>
  </>
  )
}