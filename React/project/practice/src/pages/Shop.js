import React from 'react'
import './style.css'
import bests from './productData'
import styled from 'styled-components'

const H2 = styled.h2`
  text-align: center;
  font-size: 2em;
`

const Button = styled.button`
  width: 50%;
  height: 50px;
  background-color: #ccc;
  border: 1px solid #777;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: #999;
  }
`

export default function Shop() {
  return (
    <div>
      <H2>Best 상품</H2>

      <section className='best_section'>
        {
          bests.map((best, index) => {
            return (
              <div className='best' key={best.id}>
                <img src={best.image} alt={'product_img' + index} style={{width:280, height:280}}/>
                <p className='best_desc'>{best.desc}</p>
                <h4 className='best_desc'>{best.title}</h4>
                <p className='best_desc'>{best.price}</p>
                <div className='btn'>
                  <Button>찜하기</Button>
                  <Button>장바구니</Button>
                </div>

              </div>

            )
          })
        }
      </section>
    </div>
  )
}
