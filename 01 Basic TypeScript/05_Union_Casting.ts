//  Union types  -----------------------------------------------------
//  just a fancy name for OR sign in types.     it let us specify more
//  than one type!

type MyFriends = null    | string;
type isAlive   = boolean | number;

//  type Casting -----------------------------------------------------
//  There are times when working with types where    it's necessary to 
//  override the type of a variable,  such as when incorrect types are
//  provided by a library. Casting is the process of overriding a type

let myVar1: unknown = 'hello';
console.log( (myVar1 as string).length );            // casting with as

let myVar2: unknown = 'hello';
console.log( ( <string>myVar2 ).length );            // casting with <>
//                                    casting with <> won't work in JSX

let myVar3 = 346;
console.log( ((myVar3 as unknown) as string).length );  //force Casting
//    we force casting by first cast it to unknown then to what we want