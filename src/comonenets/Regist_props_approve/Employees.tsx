import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { ApproverProps, registerd } from './types'

const Employees:React.FC<ApproverProps> = ({approve, toRemove, setInput, handleUpdate, setUpdate, update }:ApproverProps) => {


const updateEmployee = (e:registerd) =>{
 setInput(e);
 setUpdate(true);
 
}

  return (
  <Alert  variant='primary'>
    <p>{approve.name}</p>
    <p>{approve.phone}</p>
    {update ? (<Button onClick={handleUpdate} className='m-1' variant="warning">Save</Button>):(<Button onClick={()=>updateEmployee(approve)} className='m-1' variant="warning">Update</Button>)}
    <Button onClick={toRemove} className='m-1' variant="danger">Remove</Button>
  </Alert>
  )
}

export default Employees
