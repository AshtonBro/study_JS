let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
console.log('books: ',books);
console.log('book: ', book);

books[0].appendChild(book[2]);
books[0].insertBefore(book[3], book[5]);
books[0].insertBefore(book[1], book[0]);

let image = document.querySelector('body');
console.log('image.classList(): ', image.classList());
console.log('image: ', image);


