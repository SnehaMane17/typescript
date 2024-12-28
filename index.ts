
function addNumbers(a:number, b:number){
    const result = a + b
    console.log(result)
}
addNumbers(2, 2)

// Primitive Types

// 1. String types

var firstname: string = 'Sneha';

// type inferance
let autmobile = 'BMW';

const city = 'NewYork';

let student = 32
let studentAsString = student.toString();
console.log(typeof(studentAsString))


// 2. Number Types

var age: number = 12;

const numberOfMembers = 43


// 3. Booleans Types

let isStudent: boolean = true
const alwaysStudent = true


// null and undefined

let user: undefined
console.log(user); // undefined

let userRole: null
userRole = null
console.log(userRole)


// big int
let bigInt1: bigint = BigInt(1234)
console.log(bigInt1)
let bigInt2: bigint = 12345678n
console.log(bigInt2)


// Symbol type

let id: symbol = Symbol(1234);
let aplha: symbol = Symbol('test')

let users = {
    [id]: 1,    // not accesible as key, it is unique value outside directl like users.id
    name: 'sneha', 
    getId(){
        return this[id]
    }
}
console.log(users.getId())


export{}