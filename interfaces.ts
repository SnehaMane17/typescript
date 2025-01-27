//an interface is a way to define the structure or shape of an object. It is used to enforce the structure of an object, class, or function without implementing any behavior.
//Interfaces are purely for type-checking and provide a contract that objects or classes must adhere to.

interface UserUser {
  userName: string;
  email: string;
  login(): void;
}

class AdminAdmin implements UserUser {
  constructor(
    public userName: string,
    public email: string,
    public adminLevel: number
  ) {}
  login(): void {
    console.log("admin");
  }
}

class CustomerCustomer implements UserUser {
  constructor(public userName: string, public email: string) {}
  login(): void {
    console.log("customer");
  }
}

class Auth {
  public static login(user: UserUser) {
    user.login();
  }
}

const admin111: AdminAdmin = new AdminAdmin("sneha", "sneah@gmail.com", 3);
const customer: CustomerCustomer = new CustomerCustomer(
  "sneha",
  "ett@gmail.com"
);

Auth.login(admin111);
Auth.login(customer);

// extending one interface from another using extends keyword

interface User1234 {
  name: string;
  email: string;
  phone: number;
}

// interface User1234WithAddrr {
//     name: string;
//     email: string;
//     phone: number;
//     addrr: string
// }  // dumb way, repeated code for one property (addrr)

interface User1234WithAddrr extends User1234 {
  addrr: string;
}

// create object from this

const users12345: User1234 = {
  name: "sid",
  email: "sid@123gmail.com",
  phone: 1234,
};

const user1234WithAdress: User1234WithAddrr = {
  name: "sid",
  email: "sid@123gmail.com",
  phone: 1234,
  addrr: "india",
};

// inheriting multiple interfaces

enum Roless {
  admin = "admin",
  author = "author",
}

interface IRoless {
  role: Roless;
}

enum PermissionList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface IuserPermission {
  permissions: PermissionList[];
}

interface AdminUser extends User1234, IRoless, IuserPermission {
  numberOfUserssReporting: number;
} // multiple interfaces

const rom: AdminUser = {
  name: "rom",
  email: "rom@gmail",
  phone: 1233,
  role: Roless.admin,
  permissions: [PermissionList.execute, PermissionList.read],
  numberOfUserssReporting: 13,
};
console.log(rom);

// interfaces with generics

interface Automobile<Type, Brand, Colors> {
  type: Type; // type: string does not make sense, beacsue type can be car or bike same goes for brand, use generic
  brand: Brand;
  colors: Colors[];
  description: string;
}

interface CommercialVehicle {
  capacity: string;
  licenceRenew: Date;
}

enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
}

enum AutomobileColors {
  red = "red",
  black = "black",
  white = "white",
  blue = "blue",
}

// new objects

// const ferrai: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
//     type: AutomobileTypes.car,
//     brand: AutomobileBrands.ferrari,
//     colors: [AutomobileColors.black, AutomobileColors.blue],
//     description: 'this is ferrai'
// }

// const honda: Automobile<string, string, string> = { // possible to use string because of generic types
//     type: 'car',
//     brand: 'honda',
//     colors: ['red', 'blue'],
//     description: 'honda car'
// }
// console.log(ferrai)
// console.log(honda)
// above code commented to unsertand the below class example
// interfaces with classes

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = "car";
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}
}
const ferrari: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.black, AutomobileColors.blue],
  "this is ferai"
);
console.log(ferrari);

// diff class using same interface, and multiple interface

class Truck
  implements
    Automobile<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenceRenew: Date
  ) {}
}

const toyotaTruck: Truck = new Truck(
  AutomobileBrands.honda,
  [AutomobileColors.red, AutomobileColors.blue],
  "this is trcukkk",
  '1000kg',
   new Date
);
console.log(toyotaTruck);

// declaration merging->  declare same interface of same name they will get mereged.

// diff between types, interface, abstract class

type Usersss = {
    name: string
}
type AdminUserss = {
    isAdmin: boolean
}
// intersection type
const userAndAdminsss : Usersss & AdminUserss = {
    name: 'john',
    isAdmin: true
}
//union type
const userOrAdminsss: Usersss | AdminUserss = {
    name: 'mark'
}
type ResponseTuple = [string, number] // tuples possible only in types not in interfcase

// with interface we can redeclare it with same name and it gets merged, with type we will get errror it declared with same name

interface Personnn {
    name: string
}
interface Personnn {
    lastName: string
}
const testPersonsss: Personnn = {
    name:'testing',
    lastName: 'gwgde' ///merged above 2 interface
}

// interfacse can extend each othet and types cannot, same for the class it can implements multiple intefaces

// differnace between abstract class and interface
// abstract class can implements method but interface only have call signature

