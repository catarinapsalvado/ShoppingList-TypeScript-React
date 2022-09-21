import React, {useRef} from "react";

interface ShoppingListFormProps{
    onAddItem: (item: string, quantity:number) => void;

}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element{
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: React.FormEvent){
        e.preventDefault(); // o default é fazer refresh
       const newProduct = productInputRef.current!.value;
       const quantity = parseInt(quantityInputRef.current!.value) // we made the parseInt because quantity here was an number and we want to be a string 
       onAddItem(newProduct, quantity);
       productInputRef.current!.value ="" 
       // reset the input , clear
       quantityInputRef.current!.value="1"
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={productInputRef} />
        <input type="number" min={0} ref={quantityInputRef}/>
        <button type="submit"> Add Item</button>
    </form>
}

export default ShoppingListForm