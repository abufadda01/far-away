import { useState } from "react"
import Item from "./Item"


export default function PackingList({items , setItems}){

    const [sortBy , setSortBy] = useState("input")
  
    let sortedItems 
  
    if(sortBy === "input") sortedItems = items
  
    // use .slice() first to take a shallow copy from the original array and not mutate the original one
    if(sortBy === "description") sortedItems = items.slice().sort((a , b) => a.description.localeCompare(b.description))
     
    if(sortBy === "packed") sortedItems = items.slice().sort((a , b) => Number(a.packed) - Number(b.packed))
    
  
    const clearItems = () => {
      const confirmed = window.confirm("Are you sure you want to delete all items ?")
       confirmed && setItems([])
    }
    
  
    return( 
  
    <div className="list">
  
      <ul>
        {sortedItems.map((item) => {
          return <Item setItems={setItems} key={item.id} item={item}/>
        })}
      </ul>
  
  
      <div className="actions">
  
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By input order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed status</option>
        </select>
        
        <button onClick={clearItems}>Clear list</button>
      
      </div>
  
    </div>
    )
  }