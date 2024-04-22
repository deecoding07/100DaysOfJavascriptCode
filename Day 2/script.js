// Function to generate a hashtag from a given string
// Input: str - a string to convert to a hashtag
// Output: a hashtag string or false if the input string is invalid
// If the input string is empty or longer than 280 characters, the function returns false
// The function converts the first letter of each word in the input string to uppercase
// and concatenates them together with no spaces to form the hashtag.


//Method1
let str = "my name is dipanshu zalke";

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  const strUpperCase = str.split(" ").map((el) => el.replace(el[0], el[0].toUpperCase()));
  return `#${strUpperCase.join("")}`;
};
console.log(generateHash(str));


//OR


//Method2
let str2 = "my name is dipanshu zalke";

const generateHash2 = (str2) => {
    if (str2.length > 280 || str2.trim().length === 0) {
      return false;
    }
  
    const strUpperCase = str2.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("");
    return `#${strUpperCase}`;
  };
  console.log(generateHash2(str2));


//OR


//Method3
let str3 = "my name is dipanshu zalke";

const generateHash3 = (str3) => {
    if (str2.length > 280 || str2.trim().length === 0) {
        return false;
      }
    
    const res = str.split(" ").reduce((res, el) => {
        return res+el.replace(el.charAt(0), el.charAt(0).toUpperCase());
    }, "#");
    return res;
}
console.log(generateHash3(str3));

//Ans. #MyNameIsDipanshuZalke