//  Types ------------------------------------------------------------
//  we have   'simple  types':   boolean, string & number
//  and       'special types':   any, unknown, undefined, null & never

let example1 = true;         // set as boolean implicitly
    example1 = "Any string"; // see the error in the IDE

let example2: any = true;          // any will bypass TS functionality
    example2      = "Any string";  // NO ERR now!

//  avoid using any at anyCost!!!!       and also never is used rarely

let example3: unknown;

//  unknown is a similar, but safer alternative to any.    TS prevents
//  unknown types from being used.   you will cast it before using  it
//  we talk about casting in the next topics <3

let y: undefined = undefined;
let z: null = null;

//  undefined & null are types that refer to the JavaScript primitives
//  undefined & null respectively.     These types don't have much use
//  unless    strictNullChecks    is enabled in the tsconfig.json file