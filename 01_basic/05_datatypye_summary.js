//  primitive datatype 

// 7 Types :  sting ,number ,boolean ,null , undefine , symbol , bignt ...

// reference datatype / non-primitive datatype

// 3 types  : array . object ,function


const id = Symbol("ahmad")

const andotherID = Symbol("ahmad")
// console.log(id==andotherID);


const arrayAllData = ["ahamd","sameer","ali","fahad"]

const totalDetails = {
    name : "ahmad",
    age : 21,
    passMarks :  true,
}

function parentData(a,b) {
    // console.log(a+b);
    
    return   a+b
    
}
parentData(12,2)

const myFunction = function(){
    // console.log("hello javascript");
    
}
myFunction()




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory are two type ..>
// 1==> steack menory  (primitive datatype main stack memory use hoti h)
// 2==> heap memory (non- primitive datatype main heap  memory use hoti h)


// Stack memory ...jab b use krty h variable   bany k liya tu hum ko ik copy  milta h ... 

// Heap memory ....jab  b hum non - primitve datatype sa variable bany ag ty ..hum ko ik refernce mily ga original copy ka
//  or jo b value change kry vo original  value amin b change joag
let myYoutubeName = "ahmadanwar";
// console.log(myYoutubeName);

let anotherYoutubeChannel = myYoutubeName
anotherYoutubeChannel = "ahmad"
// console.log(anotherYoutubeChannel);
// console.log(myYoutubeName);


let user = {
  name: "Ahmad",
  age: 20,
  city: "Lahore"
};

// let product = user=  {
//   name: "iPhone",
//   price: 150000,
//   brand: "Apple"
// };

let userTwo = user 
    userTwo.name = "ali"
    // console.log(userTwo);
    // console.log(user);
    
    











