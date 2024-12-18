import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { ApproverProps } from './types'

const Employees:React.FC<ApproverProps> = ({approve, toRemove}:ApproverProps) => {
  return (
    <Alert  variant='primary'>
       
   
    <p>{approve.name}</p>
    <p>{approve.phone}</p>
    <Button onClick={toRemove} variant="danger">Remove</Button>
  </Alert>
  )
}

export default Employees
