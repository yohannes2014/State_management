import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../comonenets/simpleContext/Main'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/simpleContext' element={<Main />} />
    </Routes>
  )
}

export default AllRoutes