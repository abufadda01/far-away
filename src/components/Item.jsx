export default function Item({item , setItems}){

    const removePackedItem = itemId => {
      // prev will contain the old items and it will be an array
      setItems(prev => prev.filter(item => item.id !== itemId))
    }
  
    const checkPackedItem = itemId => {
      // iterate over the all prev items once any of the items objects equal the itemId that we want to update this item by spread all item keys values and only update packed value else (not the item that we want to update) return the item 
      setItems(prev => prev.map(item => item.id === itemId ? {...item , packed : !item.packed} : item))
    }
  
  
    return(
      <li>
        <input type="checkbox" value={item.packed} onChange={() => checkPackedItem(item.id)} />
        <span style={item.packed ? {textDecoration : "line-through"} : {}}>
        {item.quantity}  {item.description}
        </span>
        <button onClick={() => removePackedItem(item.id)}>❌</button>
    </li>
    )
  
  }
  