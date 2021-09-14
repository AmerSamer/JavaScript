// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary
const book = {
    name:'1984',
    author: 'George Orwell',
    publishingYear: '1949'
}

function bookFunc(bookArg){
  
    console.log('The book ' + bookArg.name+ ' was written by '+ bookArg.author + ' in the year ' + bookArg.publishingYear);
}
bookFunc(book);