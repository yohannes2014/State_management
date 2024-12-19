import { createContext } from "react";
import { CartType } from "./cartType";



export const cartContext = createContext<CartType>({
    count: 0,
    handleRemove: () => {},
    handleAdd: () => {},
    add: false,
 
});


