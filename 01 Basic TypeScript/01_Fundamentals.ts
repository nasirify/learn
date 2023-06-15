//  What is TypeScript? 
//  it is simply JavaScript with Added static types :)  very simple :)

let javaScript          = "Hello World!";
let typeScript: string  = "Hello World!";

//  then the IDE tells you if you accidentally assign any other   type
//  to the let that is set to be string!                          

typeScript=25;  //err: Type 'number' is not assignable to type 'string'

//  Type Assignment:
//  implicit  ->  TS (I mean TypeScript) guess the type as we assigned 
//                a string to it automatically also called 'infer'  as
//                we did above in javaScript
//  explicit  ->  we tell TS what the type is by writing down like  we
//                did in typeScript above