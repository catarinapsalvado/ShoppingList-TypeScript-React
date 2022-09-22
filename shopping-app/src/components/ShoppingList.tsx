import React from "react";
import  Item from '../models/item'

interface ShoppingListProps {
  items: Item[];
  completeShopping(itemNameToDelete: string): void;
}
export default function ShoppingList({
  items, completeShopping
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.product} - {item.quantity}
            <button onClick ={() => completeShopping(item.product)}className="checkButton">✔️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
