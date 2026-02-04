/*Problem Statement: Library Book Management System
//-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:*/
  class Book{

  /*Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)*/
      title;
      author;
      pages;
      isAvailable;
      
      constructor(title, author, pages, isAvailable) {
        this.title = title
        this.author = author
        this.pages = pages;
        this.isAvailable = isAvailable;
    }


  //Methods:
      //borrow() - Marks the book as not available
      borrow(){
        this.isAvailable=false
      }
      //returnBook() - Marks the book as available
      returnBook(){
        this.isAvailable=true
      }
      //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      getInfo(){
        return this.title + " by " + this.author + "(" + this.pages + " pages" + ") " ;
      }
      //isLongBook() - Returns true if pages > 300, false otherwise
      isLongBook(){
        if(this.pages>300)
            return true;
        else
            return false;

      }
}



 // 1. Create at least 5 book objects using the class:
      //Example: "Harry Potter", "1984", "The Hobbit", etc.
        let b1 = new Book("Harry Potter", 'JK Rowling', 400 , true )
        let b2 = new Book("1984", "George Orwell", 300 , false)
        let b3 = new Book("The Hobbit", 'J.R.R Tolkien', 300, true)
        let b4 = new Book("Verity", 'Colleen Hoover', 400, true)
        let b5 = new Book('And then there were none', 'Agatha Christie', 500, false)
        let books = [b1,b2,b3,b4,b5];


  //2. Perform the following operations:

      //i. Display info of all books
      console.log(b1.getInfo())
      console.log(b2.getInfo())
      console.log(b3.getInfo())
      console.log(b4.getInfo())
      console.log(b5.getInfo())
      //ii. Borrow 2 books and show their availability status
      b1.borrow();
      b5.borrow();
      console.log(b1.isAvailable)
      console.log(b5.isAvailable)

      //iii. Return 1 book and show updated status
      b2.returnBook();
      console.log(b2.isAvailable)
      //iv. Count how many books are "long books" (more than 300 pages)
      let count= books.filter(book=>book.isLongBook()).length
      console.log(count)
      //v. List all available books
      let available = books.filter(book=>book.isAvailable)
      console.log(available)

