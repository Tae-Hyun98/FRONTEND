import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Header from '../pages/Header'
import VisualMain from '../pages/VisualMain'



export default function Main() {
  return (
    <>
      <Header/>
      <VisualMain/>
    </>
  )
}
