let person = {
    name: "sneha",
    age: 26
}

//using object literal syntax
let car: {
    brand: string; 
    color: string
} = {
    brand: "bmw",
    color: "black"
} 

//type alias
type Author = {
    name: string;
    age: number;
    email: string;
    readonly typeauther : 'human' | 'ai'
}
type Award = {
    [key:string]: {
        name: string;
        date: Date
    }
}

type Post = {
    title: string;
    content: string;
    date:  Date;
    author: Author;
    awards: Award;
    tes?: string   // optional property
}

//nested objects
let postNew: Post = {
    title: "This is title",
    content: "content of the post",
    date: new Date(),
    author: {
        name: "sneha",
        age: 22,
        email: 'test2@gmail.com',
        typeauther: 'human'
    },
    awards:{
        web:{
            name: "web award",
            date: new Date()
        },
        web3:{
            name: "web3 award",
            date: new Date()
        },
    }
}

// postNew.author.typeauther = 'tets' // it is redonly cannot chnage
// for aother we can write the same nested structure of auther in type but creating seprte type is better way

// index signature of object -  sometimes we dont know the keys, that time it can be used (see awars for example)


// union types with objects - combine properties of objects
type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
    color?: string
};
type Cat = {
    name: string;
    purrs: boolean;
    color?: string
};
type DogAndcatUnion = Dog | Cat;
let dog: DogAndcatUnion = {
    name: 'buudy',
    barks: true,
    wags: true,
}; // first use case where it have all dog property
let cat: DogAndcatUnion = {
    name: 'cattyy',
    purrs: true
}; // second use case where it have all cat property
let hybridAnimal: DogAndcatUnion = {
    name: 'heybuddycat',
    barks: true,
    wags: true,
    purrs: false
}; // it should have all properties of atleast one object

//intersection type- pick similer properties of objects, and unique also
type HybridAnimalIntersection = Dog & Cat
let hybridAnimalIntersection: HybridAnimalIntersection ={
    name: 'max',
    color: 'test',
    purrs: false,
    barks: false,
    wags: true
}



