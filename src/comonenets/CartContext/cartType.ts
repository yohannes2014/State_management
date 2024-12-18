export interface CartType{
    count:number;
    handleRemove :() => void;
    handleAdd: () => void;
    add:boolean;
}

export interface List {
    fruit:string;
    price:string;
    description: string;
    image_url:string;
    add:boolean;
}


