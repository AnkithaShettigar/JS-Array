function arrayMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }
    
    return min;
  
  }
  
  function arrayMax(arr) {
  
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
     
  
  }