import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../comonenets/simpleContext/Main'
import Cart from '../comonenets/CartContext/Cart'
import TempoForm from '../comonenets/Regist_props_approve/TempoForm'
const AllRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path='/simpleContext' element={<Main />} />
      <Route path='/count' element={<Cart />} />
      <Route path='/regist' element={<TempoForm />} />
    </Routes>
  )
}

export default AllRoutes