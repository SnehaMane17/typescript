"use strict";
// Declaration of array
let numbers = [1, 2, 3, 4];
let names = ['sneha', 'sid', 'marathe'];
let users = [
    { id: 1, name: 'sneha' },
    { id: 2, name: 'sid' }
];
// Tuple: arrya witj fixed shape(values) and length
let persons = ['sneha', 'marayhe', 18];
const passingStudent = [12, true, 'sneha', 'sneha', 'sidd'];
let booleanStingNumber = [true, false, true, false, 'test', 18];
// enums are readonly like the constant variable
// rest values are auto assigned as 2,3,4
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Role;
(function (Role) {
    Role["Admin"] = "Adminnnn";
    Role["Developer"] = "Developerrrr";
})(Role || (Role = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Role.Admin);
const testPerson = {
    namee: 'sneha',
    role: Role.Admin
};
console.log(testPerson);
