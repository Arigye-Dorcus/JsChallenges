function processArray(arr) {
    
    const result = {
      evens: [],
      odds: [],
      chars: []
    };
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      
      if (typeof item === 'number' || (typeof item === 'string' && !isNaN(Number(item)))) {
        const num = typeof item === 'number' ? item : Number(item);
        
        
        if (num % 2 === 0) {
          
          insertSorted(result.evens, num);
        } else {
  
          insertSorted(result.odds, num);
        }
      } 
      
      else if (typeof item === 'string' && item.length === 1) {
        
        insertSorted(result.chars, item);
      }
    }
    
    return result;
  }
  
  
  function insertSorted(arr, item) {
    if (arr.length === 0) {
      arr.push(item);
      return;
    }
    
    
    let insertIndex = 0;
    while (insertIndex < arr.length && arr[insertIndex] < item) {
      insertIndex++;
    }
    
    
    arr.splice(insertIndex, 0, item);
  }
  
 