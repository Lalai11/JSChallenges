function findMaxOccurringChar(str) {
  const strObj = {};
  let max = 0;
  let maxChar = '';
 
  for(let char of str) {
    if(strObj[char]){
      strObj[char]++;
    }else {
      strObj[char] = 1
    }
  }
  for(let char in strObj){
    if(strObj[char] > max){
      max = strObj[char];
      maxChar = char;
    }
  }
   console.log(maxChar)
 }
 
 case1 = "helloworld"
 
 findMaxOccurringChar(case1)