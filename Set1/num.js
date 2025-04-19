
function Digits(num) {
    // Convert to positive if negative
    num = Math.abs(num);
    
    // Continue the process until we have a single digit
    while (num > 9) {
      let sum = 0;
      
      // Extract and sum each digit
      while (num > 0) {
        sum += num % 10;      // Add the last digit
        num = Math.floor(num / 10);  // Remove the last digit
      }
      
      // Update num with the new sum for the next iteration
      num = sum;
    }
    
    return num;
  }
  
  