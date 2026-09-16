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