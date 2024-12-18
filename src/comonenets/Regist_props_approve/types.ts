export interface tempoRegister {
    name:string;
    phone:string;
}

export interface registerd extends tempoRegister {
    id:number;
    approve:boolean;
}

export interface Props {
    list:registerd;
    toDelete:()=>void;
    toApprove:()=>void;

}

export interface ApproverProps {
    
    approve:registerd;
    toRemove: () => void;
}