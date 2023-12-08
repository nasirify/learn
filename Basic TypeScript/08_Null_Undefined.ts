/*  Null and Undefined  ---------------------------------------------------
    TypeScript has a powerful system to deal with  null or undefined values
    By default null and undefined handling is disabled,  and can be enabled
    by setting 'strictNullChecks' to true.
    When strictNullChecks is enabled,  TypeScript requires values to be set
    unless undefined is explicitly added to the type.
*/

let value: string | undefined | null = null;
value = 'hello';
value = undefined;


//  optional chaining
//  it's also very easy to use optional chaining (which is a JS feature) in
//  typescript as well as simple as below:
interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

//  Nullish Coalescence
//  It can be used with the ?? operator in an expression, similar to using
//  the && operator. its usage is clear in the code below:
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null);                      // Prints 'Mileage: Not Available'
printMileage(0);                                     // Prints 'Mileage: 0'