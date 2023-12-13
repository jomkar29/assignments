/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxvalue=numbers[0];
    for(num=0 ; num<numbers.length ;num++){
  if(numbers[num]>maxvalue){
    maxvalue=numbers[num];
}

    }
    return maxvalue;
}

module.exports = findLargestElement;