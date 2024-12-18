import React, { useContext } from 'react'
import { userContext } from './userContext'

const Form = () => {
    const {myName, handleChange} = useContext(userContext)
  return (
    <>
        <div>{myName}</div>
        <input type='text' value={myName} onChange={handleChange} />
    </>
    
  )
}

export default Form