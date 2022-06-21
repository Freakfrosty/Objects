/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // your code here
  let strArr = string.split('');
  let count = 1;
  let obj = {};
  // debugger

  for(let i = 0; i < strArr.length ; i++){
    let keyName = strArr[i];
    // obj[keyName] = '';
    count = 1;

    for(let j = i + 1; j < strArr.length; j++){
      let value = strArr[j];
      if(keyName == value){
        count++;
      }
    }
    if(obj[keyName] === undefined){
      obj[keyName] = count;
    }

  }

  return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
