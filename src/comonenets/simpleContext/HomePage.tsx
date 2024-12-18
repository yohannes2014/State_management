import React, { useContext } from 'react'
import Form from './Form'
import { userContext } from './userContext'
const HomePage = () => {
const { myName } = useContext(userContext)

  return (
    
    <div>
    <h2>{myName}</h2>
      <Form />
    </div>
  )
}

export default HomePage
