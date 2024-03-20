export default function Stats({items}){
  
    if(items.length === 0){
      return(
        <p className="stats">
          Start adding some items to your packing list 🚀
        </p>
      )
    }
  
  
    // get all items length
    const packedItemsNum = items.length
  
    // filter the items and only calculate the packed one length (packed : true)
    const packedItems = items.filter(item => item.packed).length
  
    // calculate percentage of the packed items from all items 
    const percentage = Math.round((packedItems / packedItemsNum) * 100)
  
    
    return <footer className="stats">
  
      <em>
        {percentage === 100 
        ?
         "You got everything! Ready to go ✈️"
        : (        
            `💼 you have ${packedItemsNum} items on your list , and you already packed ${packedItems} (${percentage}%)`
        )}
      </em> 
  
    </footer>
  }