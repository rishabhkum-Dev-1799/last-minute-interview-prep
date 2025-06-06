/**Intro to the basics of the typescript */

/**
 * Basics Data Types in the typescript
 */
// Strings
let userName:string ="Rishabh Kumar";
console.log(userName)

// numbers
let age:number = 25

// boolean
let isMarried:boolean = false

// Type Inference is the Property in the typescript which automatically detects / infers the type of the variable at the time when its declared and initialized
let anotherVar = "Rishabh";

/**Any type in the typescript - A Dangerous thing   */
//  we can also assign the variable type to any .Now the use of any type is dangerous because it makes that a variable can be assigned to any datatype which breaks the core feature of typescript

let anyVar:any = "Rishabh"
anyVar=20
console.log("Any Var",typeof anyVar);
anyVar=false
console.log("Any Var",typeof anyVar);
anyVar="Gello"

/**Functions with Typescripts--> In the Below Sections we would be learning about how to write functions in the Typescript
 */

// Arguments type --> While Defining a function we also need to define the type of the arguments else if dont define the type of the argument then by default type any would be assigned to argument.

function sum(num1:number,num2:number){
  return num1+num2;
}

// Default Arguments --> While defining the arguments we can also provide the default arguments to functions.

function printName(name:string="Rishabh Kumar"){
  console.log(`Hello ${name}`);
}

printName();
printName("Amit");

// Function return annotations - Here we have defined the function whose return type is defined to a number
function randomFn():number{
  return Math.random();
}
const nu=randomFn();
console.log(nu);

//Defining the return annotations for the arrow functions
const randomArFn = ():number => Math.random();

/**
 * 📄 Void Type - For the Functions which do not return anything we can define their return type to be void type
 */
function printSomething(text:string="Some Random Word"):void{
  // This function just console log just a random text
  console.log(text);
}


/**
 * 📄 Never Type - Never type is rarely used type which are used for functions or variables which never returns or gets assigned with the value
 * - The never type are used for following scenarios only 
 * 1) The functions which throws an error 
 * 2) The functions having infinite loop ie the functions which never ends
 * 3) The variables which are declared but cannot be initialized dangling variables
 */
function throwError():never{
    throw Error("This is the Random Error");
}

function infiniteLoop():never{
  while(true) {};
}

let x:never;

/**
 * 📄 Array Types - Arrays are one of the most used non-primitive data types , lets see how we declare the types of the arrays
 */

// Method 1 : Most widely used
const randomNumber:number[]=[1,2,3,4,5,6];
const randomString:string[]=['a','b','c','d','e'];
const randomBoolean:boolean[]=[true,false,true,false];

//Method 2 : Old Method Less widely used
const randomNumberv2:Array<number> = [1,2,3,4,5,6]
const randomStringv2:Array<string> = ['a','b','c','d','e','f','g']
const randomBooleanv2:Array<boolean> = [true,false,true,false]


/**
 * 📄 Object Types - Objects are also one of the most used non-primitive data types ,lets see how we can declare and use the objects with the types 
 */

const obj1:{firstName:string,lastName:string,age?:number}={
  firstName:"Rishabh",
  lastName:"Kumar",
  age:40
}

console.log(obj1);

/**
 * 📄 Types - In typescript generally for objects we can create a modular and reusable custom types which we can use at multiple places 
 * 
 * Below are the syntax of how we can create a custom type
 * 1) The custom type should be declared using the reserved keyword 'type'
 * 2) ? can be used to declare the optional key
 */

type User = {
  firstName:string;
  lastName:string;
  age?:number // Here ? is t
}

const user:User = {
  firstName:"Rishabh",
  lastName:"Kumar",
  age:25
}

console.log(`FirstName:${user?.firstName} LastName:${user?.lastName}`);

/**
 * 📄 Intersection Types(&) - The intersection types is one of the most important concepts to create complex custom types , using intersection types we can combine multiple different types into one
 * We use '&' to create a intersection type
 */
type T1={
  firstName:string;
  lastName:string;
  age?:number
}

type Address={
  houseNo?:string;
  locality?:string;
  street?:string;
  city:string;
  state:string;
  country:string;
  pincode:string;
}

type combinedType = T1 & Address // Combined Type is the Intersection type which is the Intersection of T1 and Address

const userData:combinedType={
  firstName:'Rishabh',
  lastName:'kumar',
  age:25,
  houseNo:'123',
  locality:'random locality',
  city:'Gotham',
  state:'Texas',
  country:'USA',
  pincode:'1231231'
}

/**
 * 📄 Union Types(|) - The Union Types is one of the most important concepts in typescript , the union types helps us create a type where variable can possess either one of the defined types 
 * 
 * To create the Union Type we need to use (|) symbol
 */

let person :string|number="Rishabh"
person=1234





