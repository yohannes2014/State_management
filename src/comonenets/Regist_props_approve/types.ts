export interface registerd {
    id:number;
    name:string;
    phone:string;
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
    setInput: React.Dispatch<React.SetStateAction<registerd>>;
    handleUpdate: () => void;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    update:boolean;

    
}