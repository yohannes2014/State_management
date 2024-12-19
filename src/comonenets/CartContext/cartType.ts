export interface List {
    fruit: string;
    price: string;
    description: string;
    image_url: string;
    add: boolean;
}

export interface CartType {
    count: number;
    handleRemove: (index: number) => void;
    handleAdd: (item: List) => void;
    add: boolean;
 

}




