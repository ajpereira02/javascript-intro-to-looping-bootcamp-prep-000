function forLoop(array) {
// here we built a function with array as an argument
   for ( let i = 0; i < 25; i++) {
// In the for loop start the count from 0(initialization), add the condition where we add a string to the array 25 times    
     if (i === 1) {
//conditional statement, i value is equal to 1 then the below condition is met      
       array.push(`I am 1 strange loop.`);
//if the above is not met, then print the below statement and return array        
     } else {
       array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
}
function whileLoop(n){
  while(n > 0){
    console.log (--n);
  }
  return 'done';
}

function doWhileLoop(array){
  function incrementVariable() {
  i = i + 1;
}
let i = 0;
  

do{
  array = array.slice(1)
  incrementVariable()
  console.log(i)
} while(array.length > 0 && i < 5);

return array
}