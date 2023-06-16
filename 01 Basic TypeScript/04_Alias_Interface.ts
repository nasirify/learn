//  Type Alias -------------------------------------------------------
//  we have default type names like string, boolean etc.     with type
//  aliases we can define our own custom names as shown below:

type MyNumber = number;
type MyString = string;

const myName1: MyString = "Mostafa";
const myName2: string = "Mostafa";
//  both of the above const do the same thing. type aliases are useful
//  type name are like constructors    so their names are PascalCased!
//  type aliases are actually useful for      object and complex types
type MyObj = {           //notice this is an object type not an object
    name: MyString,     //notice we can use other custom types in here
    age: MyNumber,
    isAlive: boolean
}

//  Interface  -------------------------------------------------------
//  they are like types but we use them               just for objects

interface Rectangle {    //notice there is no = sign! it is not an obj
    height: number;      //notice that it ends with ;     they are exp
    width: number;
}

interface ColoredRectangle extends Rectangle {
    color: string           // we can create an interface by adding to
  }                                        // an preExisting interface