"use strict";
class Userss {
    constructor(name, email, phone, test, teamsize) {
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
    printname() {
        return this.name;
    } // access modifeir example
}
// classes can be used as types also
const userss = new Userss("snehaaa", "testttt@email.com", 1223, "private");
const userss2 = new Userss("snehaaa", "testttt@email.com", 6, "private");
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
    constructor(name, email, phone, test, usersReporting) {
        super(name, email, phone, test);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
}
const admin = new Admin("mark", "mark@gmail.com", 1234, "test", 11);
console.log(admin);
const usersArraysss = [admin];
// Super keyword and method overloading that is polymorphism
class Animals {
    constructor(species) {
        this.species = species;
    }
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dogss extends Animals {
    constructor(species, breed) {
        super(species);
        this.breed = breed;
        console.log(`Dogg construtor has ${species} of ${breed}`);
    }
    makeSound() {
        console.log("Dogs barks");
    } // used same method as the class, for method overloading
}
class Cats extends Animals {
    makeSound() {
        console.log("Cat meows");
        // i want to use the method from base call also so using super
        super.makeSound();
    } // used same method as the class, for method overloading
}
function makeAnimalSound(animal) {
    animal.makeSound(); // The correct method for each class will be called
}
const dogs = new Dogss("lion", "verna");
const cats = new Cats("lion");
makeAnimalSound(dogs); // Output: Dog barks
makeAnimalSound(cats); // Output: Cat meows
// exercise of class
class Book {
    constructor(title, author, ISBN, yearPublished) {
        this.title = title;
        (this.author = author),
            (this.yearPublished = yearPublished),
            (this.ISBN = ISBN);
    }
}
const log = new Book("workout", "sneha", "testt", 2022);
console.log(log);
// function to print instance of the book
function logBookDetails(book) {
    console.log(book.title);
    console.log(book.author);
}
logBookDetails(log); // it will accept child class intance also
// sublass of EBook that extends the book class and add fleSize and format propety
class EBook extends Book {
    constructor(fileSize, format, title, author, ISBN, yearPublished) {
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
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (age > 200 || age < 0) {
            throw new Error("The age must be between 0-200");
        }
        // this.fullName = `${this.firstName} ${this.lastName}`
    }
    fullname() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}
const john = new Person("sneha", "marathe", 10); // age cannot be this, so need more logic
const sid = new Person("test", "tets2", 2); // age cannot be this, so need more logic
console.log(john.fullname());
// console.log(john.fullName)
// using setter and getter function
class BankAccount {
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.balance = initialBalance;
    }
    // Getter to retrieve the balance
    get currentBalance() {
        console.log("Getting balance...");
        return this.balance;
    }
    // Setter to update the balance with validation
    set deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        console.log(`Depositing ${amount}...`);
        this.balance += amount;
    }
    set withdraw(amount) {
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
    static increment() {
        Counter.count++;
    }
}
Counter.count = 0;
(() => {
    console.log('Initializing counter class..');
    Counter.count = 4;
})(); //A static block in TypeScript or JavaScript is a special construct in a class that allows you to perform static initialization logic. It runs once when the class is first loaded into memory (before any instance of the class is created) and is primarily used to initialize static properties or perform other class-level setup tasks.
console.log(Counter.count, 'static');
Counter.increment();
console.log(Counter.count, 'static');
const counterr = new Counter();
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getItemById(id) {
        return this.items.find((item) => item.id = id);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        return this.items.filter((item) => item.id != id);
    }
}
const repo = new Repository();
const book123 = new Repository();
repo.add({
    id: 1,
    name: 'sbea',
    email: 'sena@gmail.com'
});
book123.add({
    id: 123,
    title: 'test test',
    ISBN: 123
});
console.log(repo);
// Mixins = Mixins in TypeScript are a way to compose classes by combining the functionality of multiple classes into a single one
