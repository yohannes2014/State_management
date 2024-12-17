import { createContext } from "react";
import { Cont } from "./Types";

export const userContext = createContext<Cont>({
    myName:'',
    isOn:false,
    handleSwitch:()=>{},
    handleChange:()=>{},
})

