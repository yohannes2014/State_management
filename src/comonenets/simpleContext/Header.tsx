import React, { useContext } from 'react'
import { userContext } from './userContext'
import { Button } from 'react-bootstrap';

const Header:React.FC = () => {
    const {myName, isOn, handleSwitch} = useContext(userContext);

  return (
    <div>
      <h5>{myName}</h5>
{isOn ? (<h6>It is On</h6>):(<h6>It is Off</h6>)}

<Button onClick={handleSwitch}>{isOn ? 'On' : 'Off'}</Button>
     
    </div>
  )
}

export default Header
