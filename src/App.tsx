import React from 'react';
import AllRoutes from './routes/AllRoutes';
import { Container } from 'react-bootstrap';
import Headers from './comonenets/Headers';

const App:React.FC = () => {
  return (
    <Container>
      <Headers />
     <AllRoutes />
    </Container>
  )
}

export default App
