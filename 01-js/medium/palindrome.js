/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let Str1= str.toUpperCase().replace(/[^A-Z0-9]+/ig, "");
  let len =Str1.length-1;
  let ispal=true;
  for(i=0;i<str.length/2;i++){
     if(!(Str1[i]===Str1[len])){
       ispal=false;
       console.log("Str1[i] " ,Str1[i]," i: ",i ," Str1[len] ",Str1[len]," len: ",len);
     }
     len=len-1;
  }
 return ispal;
}


module.exports = isPalindrome;
