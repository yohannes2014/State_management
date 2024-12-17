import React from 'react'
import AllRoutes from '../routes/AllRoutes'
import Headers from '../comonenets/Headers'
import { Container } from 'react-bootstrap'

const Home:React.FC = () => {
  return (
    <Container>
        <Headers />
        <p>This is state management using typescript</p>
        <ul>
            <li>useContext</li>
            <li>useReducer</li>
        </ul>
        
      <AllRoutes />
    </Container>
  )
}

export default Home
