import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <Container>
        <NavLink to='/' >
         Home
        </NavLink>
        <NavLink to='/simpleContext' >
         Simple Context
        </NavLink>
      
    </Container>
  )
}
 
export default Headers
