// string are presened in three different way..
// 1--> single quote
// 2--> double quote
// 3--> backets quote 

const name =  "ahmad";
const repoCounter = 49;
// console.log(name + repoCounter + "value");
// console.log(`MY name is ${name} and MY repoCoutnter is ${repoCounter} `); 
//  --> backets quote 


// Second method desclare to string 
const gameName = new String("hello ahmad")
// console.log(gameName);
// return in obect
// value acces krna in string 
// console.log(gameName[4]);  acces in object positon
// console.log(gameName.length);  find the length
// console.log(gameName.toUpperCase());  upper case main sab character
// console.log(gameName.charAt(3));    character ki poition check krny k liya
// console.log(gameName.indexOf("m"));  index poistion check krana charater ki 


// substring  method 
const newStringGames = gameName.substring(0,8)
// console.log(newStringGames);  substring tab use krty h jab string ko torna h ho ....jasy string main sa kuch string nklna

const anotherStringGames = gameName.slice(-10,3)
// console.log(anotherStringGames);   hum is main negative value b add kr skahty h

// trim method
const newOneAntherStringtTrim = "    ahmad  anwar "
const anthernewOneAntherStringtTrim = "  ahmad anwar   "
// console.log(newOneAntherStringtTrim);
// console.log(newOneAntherStringtTrim.trim());  
// console.log(anthernewOneAntherStringtTrim.trim());   trim sari space jo extra space hoti h vo sari khtm kr dyat h ..


// replace method 
const url1 = "https://wwww.google.com/ahmad%30anwar"
// console.log(url.replace("%30", "-"));


// incluses   --> check kr k bata h is  mai yah word h k nai 
const url = "https://wwww.google.com/ahmad%30anwar"
// console.log(url.includes('ahmad'));


const strSpilt = gameName.split("*")

// console.log(strSpilt);

  

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" -");
// console.log(words);



let word = "Ahmad";

let result = word.split("");

// console.log(result);