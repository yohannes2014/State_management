export interface Cont{
    myName:string;
    isOn:boolean;
    handleSwitch : () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 
}