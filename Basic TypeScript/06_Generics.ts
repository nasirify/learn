/*  Generics  --------------------------------------------------------
    Generics allow creating 'type variables'      which can be used to
    create classes,        functions & type aliases that don't need to
    explicitly define the types that they use.
    Generics makes it easier to write "reusable" code!
*/

type MyType<T> = { value: T };               // first we create a type
const myVar: MyType<number> = { value: 10 };         // then we use it

// we can use it in functions too,    it can be more than one argument
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]