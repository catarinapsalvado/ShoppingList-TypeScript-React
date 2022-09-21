import React, {useState} from 'react';
import './App.css';
import Greeter from './components/Greater';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingItemForm';
import  Item from './models/item'

function App() {

  const [items, setItems] = useState<Item[]>([]); // It starts as an empty array but the type is Item 

/*   const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken", quantity: 2 },
  ]; */

  return (
    <div>
     {<ShoppingList items ={items}/> }
     <ShoppingListForm/>
    </div>
  );
}

export default App;
