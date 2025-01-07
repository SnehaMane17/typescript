"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers(a, b) {
    const result = a + b;
    console.log(result);
}
addNumbers(2, 2);
// Primitive Types
// 1. String types
var firstname = 'Sneha';
// type inferance
let autmobile = 'BMW';
const city = 'NewYork';
let student = 32;
let studentAsString = student.toString();
console.log(typeof (studentAsString));
// 2. Number Types
var age = 12;
const numberOfMembers = 43;
// 3. Booleans Types
let isStudent = true;
const alwaysStudent = true;
// null and undefined
let user;
console.log(user); // undefined
let userRole;
userRole = null;
console.log(userRole);
// big int
let bigInt1 = BigInt(1234);
console.log(bigInt1);
let bigInt2 = 12345678n;
console.log(bigInt2);
// Symbol type
let id = Symbol(1234);
let aplha = Symbol('test');
let users = {
    [id]: 1, // not accesible as key, it is unique value outside directl like users.id
    name: 'sneha',
    getId() {
        return this[id];
    }
};
console.log(users.getId());
