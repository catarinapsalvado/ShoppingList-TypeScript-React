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

  const completeShopping =(itemNameToDelete: string): void => {
    setItems(items.filter((itemName) => {
      return itemName.product !== itemNameToDelete
    }))
  }

  return (
    <div className='App'>
      <div className='header'> <h1>Shopping List</h1></div>
     {<ShoppingList items ={items} completeShopping ={completeShopping}/> }
     <ShoppingListForm onAddItem={addItem} />
     
    </div>
  );
}

export default App;
