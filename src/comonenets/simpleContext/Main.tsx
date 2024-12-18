import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Button, Container } from 'react-bootstrap';
import Home from './HomePage';
import Header from './Header';
import { userContext } from './userContext';

const Main:React.FC = () => {
  const [myName, setMyname] = useState('');
  const [isOn, setIsOn] = useState(false);


const handleSwitch = () => {
  setIsOn(!isOn);
}
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

  setMyname(e.target.value);
} 
  return(
    <Container>
      <userContext.Provider value={{myName, isOn, handleSwitch, handleChange }} >
        <p>This is simple useContext typescript</p>
          <Header />
          <Home />
          <input name='value' value={myName} onChange={handleChange} type='text' />
          <Button onClick={handleSwitch}>{isOn ? 'On':'Off'}</Button>
      </userContext.Provider>
    </Container>
  );
}

export default Main;
