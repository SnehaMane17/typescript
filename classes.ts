class Userss {
  public name: string; // public access modifire, even if do not mentioned
  readonly email: string; // readonly property
  teamsize?: number; // optional fields
  protected phone: number; // access modifier protected
  private test: string;
  constructor(
    name: string,
    email: string,
    phone: number,
    test: string,
    teamsize?: number
  ) {
    this.name = name;
    this.email = email;
    this.teamsize = teamsize;
    this.phone = phone;
    this.test = test;
  }
  // this keyword is used to access properties and methods of same class within it's methods and contrcotor
  greet() {
    return `Hello ${this.name}`;
  }
  public printname() {
    return this.name;
  } // access modifeir example
}

// classes can be used as types also
const userss: Userss = new Userss(
  "snehaaa",
  "testttt@email.com",
  1223,
  "private"
);
const userss2: Userss = new Userss(
  "snehaaa",
  "testttt@email.com",
  6,
  "private"
);
userss.teamsize = 3;
// userss.test  // error can be access in class only
// userss.email = 'test@gmail.cmm'  // error beacuse it is redonly and can not chnaged
console.log(userss);
console.log(userss2);
// console.log(userss.phone) // error because it's protected and not can be access with instance of class
console.log("access modifier example of method ", userss.printname());

console.log(userss.greet());

// when you create new instance of the class then constructor function gets executed

// Inheritance in class (one class can only inherit one another class )
// child class can extend only one parent class
class Admin extends Userss {
  isAdmin: boolean = true;
  usersReporting: number;
  constructor(
    name: string,
    email: string,
    phone: number,
    test: string,
    usersReporting: number
  ) {
    super(name, email, phone, test);
    this.usersReporting = usersReporting;
  }
}

const admin: Admin = new Admin("mark", "mark@gmail.com", 1234, "test", 11);
console.log(admin);
const usersArraysss: Userss[] = [admin];

// Super keyword and method overloading that is polymorphism

class Animals {
  species: string; // this is to undestand the constructor in base and child class
  constructor(species: string) {
    this.species = species;
  }

  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dogss extends Animals {
  // now if you try to use the another consturor here you get error, have to use super
  breed: string;
  constructor(species: string, breed: string) {
    super(species);
    this.breed = breed;
    console.log(`Dogg construtor has ${species} of ${breed}`);
  }

  makeSound(): void {
    console.log("Dogs barks");
  } // used same method as the class, for method overloading
}

class Cats extends Animals {
  makeSound(): void {
    console.log("Cat meows");
    // i want to use the method from base call also so using super
    super.makeSound();
  } // used same method as the class, for method overloading
}

function makeAnimalSound(animal: Animals): void {
  animal.makeSound(); // The correct method for each class will be called
}

const dogs = new Dogss("lion", "verna");
const cats = new Cats("lion");

makeAnimalSound(dogs); // Output: Dog barks
makeAnimalSound(cats); // Output: Cat meows

// exercise of class

class Book {
  // shorthand for constructor, use public keyword in parameter of contrctur then you dont have to declase outside and this. value
  // see example of title

  author: string;
  yearPublished?: number;
  readonly ISBN: string;

  constructor(
    public title: string,
    author: string,
    ISBN: string,
    yearPublished?: number
  ) {
    (this.author = author),
      (this.yearPublished = yearPublished),
      (this.ISBN = ISBN);
  }
}

const log = new Book("workout", "sneha", "testt", 2022);
console.log(log);

// function to print instance of the book
function logBookDetails(book: Book) {
  console.log(book.title);
  console.log(book.author);
}
logBookDetails(log); // it will accept child class intance also

// sublass of EBook that extends the book class and add fleSize and format propety

class EBook extends Book {
  fileSize: number;
  format: string;

  constructor(
    fileSize: number,
    format: string,
    title: string,
    author: string,
    ISBN: string,
    yearPublished?: number
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}

const ebook = new EBook(100, "pdf", "ebook workout", "sid", "1234", 2023);
console.log(ebook);

// More control over class

class Person {
  // public fullName:  string
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be between 0-200");
    }
    // this.fullName = `${this.firstName} ${this.lastName}`
  }

  public fullname() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}
const john: Person = new Person("sneha", "marathe", 10); // age cannot be this, so need more logic
const sid: Person = new Person("test", "tets2", 2); // age cannot be this, so need more logic
console.log(john.fullname());
// console.log(john.fullName)

// using setter and getter function

class BankAccount {
  public balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.balance = initialBalance;
  }

  // Getter to retrieve the balance
  get currentBalance(): number {
    console.log("Getting balance...");
    return this.balance;
  }

  // Setter to update the balance with validation
  set deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    console.log(`Depositing ${amount}...`);
    this.balance += amount;
  }

  set withdraw(amount: number) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    console.log(`Withdrawing ${amount}...`);
    this.balance -= amount;
  }
}

// Using the BankAccount class

const account = new BankAccount(1000);

console.log("Initial Balance: ", account.currentBalance); // Output: Getting balance... \n 1000

account.deposit = 500; // Depositing 500...

console.log("Updated Balance: ", account.currentBalance); // Output: Getting balance... \n 1500

account.withdraw = 200; // Withdrawing 200...
console.log("Final Balance: ", account.currentBalance); // Output: Getting balance... \n 1300

// Invalid operations will throw errors
// account.deposit = -100; // Error: Deposit amount must be positive
// account.withdraw = 2000; // Error: Insufficient funds

// static keyword -  to use static memebers and method we dont need to create instacne of it
class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }
  static {
    console.log('Initializing counter class..')
    Counter.count = 4
  }  //A static block in TypeScript or JavaScript is a special construct in a class that allows you to perform static initialization logic. It runs once when the class is first loaded into memory (before any instance of the class is created) and is primarily used to initialize static properties or perform other class-level setup tasks.


}
console.log(Counter.count, 'static');
Counter.increment();
console.log(Counter.count, 'static');
const counterr: Counter = new Counter();

// Generics in classes

// to make sure id exists
type Idenfifiable = {
  id: number
}
 class Repository<T extends Idenfifiable> {
  private items: T[] = [];

  add(item: T){
    this.items.push(item);
  }
  getItemById(id: number): T | undefined{
    return this.items.find((item)=> item.id = id);
  }
  getAll(): any[]{
    return this.items;
  }
  removeById(id: number) {
    return this.items.filter((item)=> item.id != id)
  }
 }
 
 type Users12 =  Idenfifiable & {
  name: string;
  email: string
 }
type Book123 = Idenfifiable & {
  title: string
  ISBN : number
}
 const repo = new Repository<Users12>()
 const book123 = new Repository<Book123>()
 repo.add({
  id:1,
  name: 'sbea',
  email: 'sena@gmail.com'
 })
 book123.add({
  id:123,
  title: 'test test',
  ISBN: 123
 })
 console.log(repo)

 // Mixins = Mixins in TypeScript are a way to compose classes by combining the functionality of multiple classes into a single one

 


