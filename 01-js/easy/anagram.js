/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let Str1= str1.toUpperCase();
  let Str2=str2.toUpperCase();

if(!(Str1.length==Str2.length)){
  return false;
}

let ispresent= true;
let num=0;
for(let i=0;i<Str1.length;i++){
  num=0;
    for(let j=0;j<Str2.length;j++){
      if(Str1[i]==Str2[j]){
        num=num+1;
      }
    }
    if(num<1){
      ispresent=(ispresent && false);
    }
}
return ispresent;
}

module.exports = isAnagram;
