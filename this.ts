const book = {
    title: 'The book',
    authors: ['sid', 'sneha', 'marathe'],
    read(){
        console.log(this)
    },
    // printAuthors(){
    //     this.authors.forEach(function(author){
    //         console.log(this.title, author)
    //     }) // this wont work  get error at this, beacuse normal functions get the globa scope
    // }
    printAuthors(){
        this.authors.forEach((author)=>{
            console.log(this.title, author)
        }) // this will work because this in arrow function always refer to parent object, here this bind to printauthpr which itself binds to the book object and does get bind to function
    }
}
book.read()
book.printAuthors()