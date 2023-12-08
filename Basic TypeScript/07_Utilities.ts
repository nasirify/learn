//  Utility types  --------------------------------------------------------

//  Partial:         changes all the properties in an object to be optional
interface Point { x: number; y: number; }
let pointPart: Partial<Point> = {}

// Required:         changes all the properties in an object to be required
interface Car { make: string; model: string; mileage?: number; }
let myCar: Required<Car> = { make: 'Ford', model: 'Focus', mileage: 12000 };

// Record:         is a shortcut to defining an object type with a specific
//                 key type and value type
const nameAgeMap: Record<string, number> = { 'Alice': 21, 'Bob': 25 };
// Record<string, number> is equivalent to { [key: string]: number }

//  Omit: removes keys from an object type.
interface Person {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    //    age and location are removed from the type & can't be defined here
};

//  Pick removes all but the specified keys from an object type.
interface Person {
    name: string;
    age: number;
    location?: string;
}
const rob: Pick<Person, 'name'> = {
    name: 'Bob'
    //  `Pick` has only kept name, so age and location were removed from the
    //  type and they can't be defined here
};

//  Exclude removes types from a union.
//  ReturnType extracts the return type of a function type.
//  Parameters extracts the parameter types of a function type as an array.



