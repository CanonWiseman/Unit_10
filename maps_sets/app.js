//1. The following code returns a set containing [1,2,3,4]

//2. The code returns an error becuase you can't use .join on a set

//3. m would look like this
    //{
        //[1,2,3], true
        //[1,2,3], false
    //}

//4.
const hasDuplicate = (arr) => {
    if(new Set(arr).size === arr.length){
        return false;
    }
    else{
        return true;
    }
    
}

const vowelCount = (str) => {
    const vowels = "aeiou";
    const lowerCase = str.toLowerCase();
    const vowelMap = new Map();
    for(let char of lowerCase){
        if(vowels.includes(char)){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
            }
            else{
                vowelMap.set(lowerCase, 1);
            }
        }
    }
    return vowelMap;
}