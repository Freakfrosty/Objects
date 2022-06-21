/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // your code here
  let count = 1;
  let obj = {};
  debugger

  for(let i = 0; i < array.length ; i++){
    let keyName = array[i];
    // obj[keyName] = '';
    count = 1;

    for(let j = i + 1; j < array.length; j++){
      let value = array[j];
      if(keyName == value){
        count++;
      }
    }
    if(array[i] === array[i - 1]){
      break
    }
    else if(obj[keyName] === undefined){
      obj[keyName] = count;
    }

  }

  return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
