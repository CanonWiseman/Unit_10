//1. the following code retuns 8 and 1846

//2. the following code returns [1846, 1659]

//3. the following code will return 
    //a. Your name is alejandro and you like purple
    //b. your name is melissa and you like green
    //c, you name is undeined and you like green

//4. this code will return in the console
    //Maya
    //Marisa
    //Chi

//5. This code will return in the console.
    //Raindrops on roses
    //Whiskers on kittens
    //"Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"

//6. this code will return [10, 30, 20]

const obj = {
    numbers: {
        a:1,
        b:2
    }
}

let {a, b} = obj.numbers;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest}); 