//Method 1
let str1 = "100 Day Of Javascript Code Challenge";

function findLongestWord1(str1) {
  let arr = str1.split(" ");
  let max = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(max.length<arr[i].length) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findLongestWord1(str1));

// OR

//Method2
let str2 = "100 Day Of Javascript Code Challenge";

const findLongestWord2 = (str2) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length); //Comparison function
  return words[0];
};
console.log(findLongestWord2(str2));

// OR 

//Method3
let str3 = "100 Day Of Javascript Code Challenge";

function giveBigString(str2) {
  let val = 0;
  let string = "";
  let arr = str2.split(" ");

  arr.map((e) => {
    if(e.length > val) {
      string = e;
      val = e.length;
    }
  });
  return string;
}
console.log(giveBigString(str3));

//Ans. Javascript
