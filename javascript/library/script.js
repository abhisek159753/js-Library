window.onload = function(){
    let myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function(){
            return(title + " by " + author + ", " + pages + ", " + read)
        }
        document.getElementById("titles").innerHTML = ("Title: "+title);
        document.getElementById("authors").innerHTML = ("Author: "+author);
        document.getElementById("pages").innerHTML = ("Number of Pages: "+pages);
        document.getElementById("readStatus").innerHTML = read;
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
        displayLibrary();
    }

    function displayLibrary(){
        var node = document.getElementById("books");
        var clone = node.cloneNode(true);
        clone.style.display ="block";
        document.getElementById("bookContainer").appendChild(clone);
    }
    //Opens form for book information 
    const addBook = document.getElementById("add-books");
    addBook.addEventListener("click", function(){
        document.getElementById("myForm").style.display = "block";
    });
    //Adds new book and closes form
    const submitBook = document.getElementById("submitBtn");
    submitBook.addEventListener("click", function(){
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let page = document.getElementById("page").value;
        let read = document.querySelector('input[name="read"]:checked').value;
        let newBook = Book(title, author, page, read);
        addBookToLibrary(newBook);
        document.getElementById("myForm").style.display = "none";
        document.getElementById("book-form").reset();
    });

    const toggleRead = document.getElementById("toggleRead");
    toggleRead.addEventListener("click", function(){
        //change read status
    });

    var rmvBook = document.getElementById("rmvBook");
    rmvBook.addEventListener("click", function(e){
        e.parentNode.remove();
        //remove book
    });
}
