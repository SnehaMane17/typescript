"use strict";
let person = {
    name: "sneha",
    age: 26
};
//using object literal syntax
let car = {
    brand: "bmw",
    color: "black"
};
//nested objects
let postNew = {
    title: "This is title",
    content: "content of the post",
    date: new Date(),
    author: {
        name: "sneha",
        age: 22,
        email: 'test2@gmail.com',
        typeauther: 'human'
    },
    awards: {
        web: {
            name: "web award",
            date: new Date()
        },
        web3: {
            name: "web3 award",
            date: new Date()
        },
    }
};
let dog = {
    name: 'buudy',
    barks: true,
    wags: true,
}; // first use case where it have all dog property
let cat = {
    name: 'cattyy',
    purrs: true
}; // second use case where it have all cat property
let hybridAnimal = {
    name: 'heybuddycat',
    barks: true,
    wags: true,
    purrs: false
}; // it should have all properties of atleast one object
let hybridAnimalIntersection = {
    name: 'max',
    color: 'test',
    purrs: false,
    barks: false,
    wags: true
};
