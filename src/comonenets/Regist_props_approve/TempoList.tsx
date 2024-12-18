import React from 'react'
import { Props } from './types'
import { Alert, Button } from 'react-bootstrap'


const TempoList:React.FC<Props> = ({list, toDelete, toApprove}:Props) => {
  return (
    <>
        <Alert  variant='warning'>
            <p>id : {list.id}</p>
            <p>name : {list.name}</p>
            <p>phone : {list.phone}</p>
            <Button variant="success" onClick={toApprove}>Approve</Button> <Button onClick={toDelete} variant="danger">Remove</Button>
         
        </Alert>    
    </>
  
  )
}

export default TempoList