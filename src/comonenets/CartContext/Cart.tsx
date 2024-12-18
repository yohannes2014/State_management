import React, { useState } from 'react'
import {cartContext} from './cartContext'
import CartList from './CartList';
import CartHeader from './CartHeader';

const Cart:React.FC = () => {
    const [add, setAdd] = useState(false);
    const [count, setCount] = useState(0);
 const handleAdd = () =>{
    setCount(count +1);
    setAdd(true);
 }
 const handleRemove = () =>{
    setCount(count-1);
    setAdd(false);
 }

  return (
    <cartContext.Provider value={{handleAdd, handleRemove, count, add}} >
        
        <CartHeader />
        <CartList />
        
    </cartContext.Provider>
  )
}

export default Cart
