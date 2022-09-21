import React, {useState} from 'react';
import './App.css';
import Greeter from './components/Greater';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingItemForm';
import  Item from './models/item'
import {v4 as getId} from "uuid"; //generates random ids 

function App() {

  const [items, setItems] = useState<Item[]>([]); // It starts as an empty array but the type is Item 
  const addItem = (product:string, quantity:number) => {
    console.log('Made to the app component');
   setItems([...items,{id: getId(), product, quantity}])
  }
/*   const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken", quantity: 2 },
  ]; */

  return (
    <div>
     {<ShoppingList items ={items}/> }
     <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
