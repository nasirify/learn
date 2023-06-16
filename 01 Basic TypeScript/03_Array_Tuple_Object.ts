//  Array ------------------------------------------------------------

const myArray1: string[]=[]; // so its type is Array with  string data
const myArray2: number[]=[]; // so its type is Array with  number data
const myArray3: readonly number[]=[]; // just like above but  readonly

//  Tuple ------------------------------------------------------------
//  A typed array with   a pre-defined length and types for each index
//  In mathematics, a tuple is a finite /ˈfaɪ.naɪt/ AKA   ordered list
//  (or sequence) of elements. 

let myArray0  = [];                        // normal array declaration
let myTuple1: [number, boolean, string];             //   normal tuple
let myTuple2: readonly [number, boolean, string];    // readonly tuple
// a readonly tuple with 'typed' indexed and assigned value **********
let myTuple3: readonly [x: number, y: number] = [55.2, 41.3];

//  Objects ----------------------------------------------------------

const myObj0 = {                          // normal object declaration
    name: "Mostafa",
    age: "25",
    isAlive: true,
}
const myObj1: {            // object declaration plus type declaration
    name: string,
    age?: number,        //age is optional with ? and can be undefined
    isAlive: boolean,
} = {                          
    name: "Mostafa",
    age: 25,
    isAlive: true,
}
const myObj2: {key1: string} = {key1: "The String!"}     // short form
// we use index signature for declaring all types in an object at once
const myObj3: { [index: string]: number } = {}

