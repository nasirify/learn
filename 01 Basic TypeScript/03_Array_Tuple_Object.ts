//  Array ------------------------------------------------------------

const myArray1: string[]=[]; // so its type is Array with  string data
const myArray2: number[]=[]; // so its type is Array with  number data
const myArray3: readonly number[]=[]; // just like above but  readonly

//  Tuple ------------------------------------------------------------
//  A typed array with   a pre-defined length and types for each index
//  In mathematics, a tuple is a finite /ˈfaɪ.naɪt/ AKA   ordered list
//  (or sequence) of elements. 

let myTuple1: [number, boolean, string];             //   normal tuple
let myTuple2: readonly [number, boolean, string];    // readonly tuple
// a readonly tuple with 'typed' indexed and assigned value **********
let myTuple3: readonly [x: number, y: number] = [55.2, 41.3];

//  Objects ----------------------------------------------------------
