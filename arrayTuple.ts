// Declaration of array
let numbers: number[] = [1,2,3,4]
let names: Array<string> = ['sneha', 'sid','marathe']

// Array of objects
interface User {
    id: number;
    name: string
}
let users: User[]= [
    {id: 1, name: 'sneha'},
    {id: 2, name: 'sid'}
]

// Tuple: arrya witj fixed shape(values) and length
let persons: readonly [string, string, number, string?] = ['sneha', 'marayhe', 18]
// last rest operator represents n number of possibilities, 
type ListOfStudents = [number, boolean, ...string[]]
const passingStudent: ListOfStudents = [12, true, 'sneha', 'sneha','sidd']
// rest operator can be use anywhere, it has to end with string and number and for start add as many as boolean as you want
type BooleanStringNumber = [...boolean[], string, number];
let booleanStingNumber : BooleanStringNumber= [true, false, true, false, 'test', 18]

// enums are readonly like the constant variable
// rest values are auto assigned as 2,3,4

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
enum Role {
    Admin = 'Adminnnn',
    Developer = 'Developerrrr'
}
console.log(Direction.Up)
console.log(Direction.Down)
console.log(Role.Admin)

type Personn = {
    namee: string,
    role: Role
};

const testPerson: Personn = {
    namee :'sneha',
    role : Role.Admin
}
console.log(testPerson)