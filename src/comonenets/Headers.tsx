import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Headers:React.FC = () => {
  return (
    <Container>
        <NavLink to='/' className='m-2' >
         Home
        </NavLink>
        <NavLink to='/simpleContext'className='m-2' >
         Simple Context
        </NavLink>
        <NavLink to='/count'className='m-2' > 
         Cart
        </NavLink>
        <NavLink to='/regist' className='m-2'>
         Regist
        </NavLink>
      
    </Container>
  )
}
 
export default Headers
