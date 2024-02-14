/*
REVERSING AN ARRAY

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

// Your code here.
function reverseArray(arrayValue) {
  let loop = Math.floor(arrayValue.length / 2)
  for(let i = 0; i < loop; i++) {
    let lastIndex = arrayValue.length - 1 - i
    let temp = arrayValue[i]
    arrayValue[i] = arrayValue[lastIndex]
    arrayValue[lastIndex] = temp
  }
  return arrayValue
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(arrayValue));
// → [5, 4, 3, 2, 1]
