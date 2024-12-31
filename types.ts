// any type
let firstname: any = 'sneha'
firstname = 123
function returnParam(param:any){
    return param
}

//unknown
function multiply(number: unknown){
    if(typeof number === "number")
    {
        return number * 2
    }
    return "Please provide valid number"
}
console.log(multiply(3))
console.log(multiply("test"))
let value: unknown
value = "test"
// console.log(value.toUppercase()) // direct operation is not allowed
if( typeof value === "string"){
    console.log(value.toUpperCase())  // now allowed because we did type checking
}

// Type alias
type CustomString = string   
type CustomNumber = number
let lastName: CustomString = "Sneha"
let age: CustomNumber = 12345

type TestString = string  // Declaration
let testingOne: string = 'marathe' // Annotation

function addNumbers(a: number, b:number){
    return a+b
}
let result = addNumbers(2,3) // it infered type from guessing

// Union type
type StringOrNumber = string | number
type NumberOrUndefined = number | undefined | string
let stringOrNumberTest: StringOrNumber = 123
let numberOrunefined: NumberOrUndefined = undefined

// Type casting

let firstnamee = <any>"Sneha"; // when we case one type to another
//alternative syntax
let lastNamee = "Marathe" as any
//Practical use case
// user from api example
let user = {
    name: 'sneha',
    age: 12
}
type Users = {
    name: string,
    age: number
}
function fetchUsers(){
    return user as Users
}
const fetcedusers = fetchUsers()