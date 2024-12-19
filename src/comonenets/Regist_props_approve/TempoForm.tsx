import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { registerd } from './types'
import TempoList from './TempoList';
import Employees from './Employees';

const TempoForm: React.FC = () => {
    const [input, setInput] = useState<registerd>({
        id:0,
        name: '',
        phone: '',
        approve:false
    });

    const [list, setList] = useState<registerd[]>([])
    const [approved, setApproved] = useState<registerd[]>([])
    const [update, setUpdate] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form: registerd = {
            id: Math.floor(Math.random() * 10000),
            name: input.name,
            phone: input.phone,
            approve: true
        }

        setList([...list, form]);
        setInput({ id:0, name: '', phone: '', approve:false });

    }
    const removeHandler = (id: number) => {
        setList(list.filter((i) => (i.id !== id)));
    }

    const approveHandler = (item: registerd) => {
        const chechApprove = list.some((i) => i.id === item.id);

        if (chechApprove) {
            setList(list.filter((i) => i.id !== item.id));
            const newApprove: registerd = {
                id: item.id,
                name: item.name,
                phone: item.phone,
                approve: true
            }
            setApproved([...approved, newApprove]);
        }
    }

    const handleRemove = (event: registerd) => {
        setApproved(approved.filter((item) => item.id !== event.id))
    }

const handleUpdate = () => {
    const updatedList = approved.map((item)=>item.id === input.id ? {item, ...input} : item);
    setApproved(updatedList);
    setUpdate(false);
    setInput({id:0, name:'', phone:'', approve:false});
}
   
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormControl type='text' name='name' onChange={handleChange} value={input.name} placeholder='Name' />
                <FormControl type='text' name='phone' onChange={handleChange} value={input.phone} placeholder='Phone' />
                <Button type='submit'>Submit</Button>
            </Form>
            <h6>total Pending {list.length} </h6>
            {list.map((item) => (
                <TempoList
                    key={item.id}
                    list={item}
                    toDelete={() => removeHandler(item.id)}
                    toApprove={() => approveHandler(item)}

                />))}

            <h6>Total employess {approved.length}</h6>
            {approved.map((item) => (
                <Employees
                    key={item.id}
                    approve={item}
                    toRemove={() => handleRemove(item)}
                    setInput={setInput}
                    handleUpdate={handleUpdate}
                    setUpdate={setUpdate}
                    update={update}
                   
                />
            ))}
        </div>
    )
}

export default TempoForm


