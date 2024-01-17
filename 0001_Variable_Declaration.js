// ------------Variable Declaration-------------- 

// -----------let-------------------
// let- to declare block scoped variable and can be reassign
// but cannot declare same variable twice in a same block
let myName = "Anupama";
console.log(myName);

// let inside a function 
function sum(){
    let a = 6;
    let b = 7
    return a+b;
}
const sumValue = sum();
console.log(sumValue);

// 'a' variable was declare in sum() function so that 'a' variable
// cannot be accessible outside function so we can create same named 
// variable outside the function with 'let' keyword
let a = 4;
console.log(a); // 4

//let inside for loop
// variable 'i' is scoped to this loop only outside this loop
// variable 'i' doesnot exists
for(let i=0;i<7;i++){
    // process.stdout.write() is used to print elements in a single line
    process.stdout.write(i+" ");
}

// ---------------const-----------------

// const- used to declare constants. Once variable id 
// declared with 'const' cannot be reassigned and block scoped also
const PI = 3.14
console.log(PI)

// const inside object
const obj = {name:"anupama"};
// we can reassign the property of object but cannot reassign the object itself
obj.name = "Honey";
console.log(obj); // { name: 'Honey' }
