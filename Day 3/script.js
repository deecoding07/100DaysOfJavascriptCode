//Method1
const countChar = (word,char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((res, el) => {
        if (el === char) {
            res++;
        }
        return res;
    }, 0);
    return totalCount;
}
console.log(countChar("Computer Science", "c"));

// OR

//Method2
const countChar2 = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    
    let count = 0;
    for(let i=0; i<word.length; i++){
        if(word[i] === char){
            count++;
        }
    }
    return count;
}
console.log(countChar2("Computer Science", "c"));

//OR 

//Method3
const countChar3 = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    
    let count = 0;
    for(const letter of word){
        if(char === letter){
            count++;
        }
    }
    return count;
}
console.log(countChar3("Computer Science", "c"));


//Ans.= 3
