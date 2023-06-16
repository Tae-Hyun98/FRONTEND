import React from 'react'
import './shop.css'
import Products from './productData'
import styled from 'styled-components'



const Button = styled.button`
  width: 50%;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: 0.3s;;
  &:hover{
    background-color: #777;
  }
`

export default function Shop() {
  return (

    <section className='best_section'>

      {
      Products.map((product, index) => {
        return (
          <div className='product' key={product.id}>
            <img src={product.image} alt={'product_img' + index}/>
            <p className='best_desc'>{product.desc}</p>
            <h4 className='best_desc'>{product.title}</h4>
            <p className='best_desc'>{product.price}</p>

            <div className='btn'>
            <Button>찜하기</Button>
            <Button>장바구니</Button>
            </div>

          </div>

        )
      })

      }
        
    </section>
  )
}
