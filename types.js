"use strict";
// any type
let firstname = 'sneha';
firstname = 123;
function returnParam(param) {
    return param;
}
//unknown
function multiply(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide valid number";
}
console.log(multiply(3));
console.log(multiply("test"));
let value;
value = "test";
console.log(value.toUppercase()); // direct operation is not allowed
if (typeof value === "string") {
    console.log(value.toUpperCase()); // now allowed because we did type checking
}
let lastName = "Sneha";
let age = 12345;
let testingOne = 'marathe'; // Annotation
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(2, 3); // it infered type from guessing
let stringOrNumberTest = 123;
let numberOrunefined = undefined;
// Type casting
let firstnamee = "Sneha"; // when we case one type to another
//alternative syntax
let lastNamee = "Marathe";
//Practical use case
// user from api example
let user = {
    name: 'sneha',
    age: 12
};
function fetchUsers() {
    return user;
}
const fetcedusers = fetchUsers();
