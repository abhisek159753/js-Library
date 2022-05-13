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
    //adds book to array
    function addBookToLibrary(book) {
        myLibrary.push(book);
        displayLibrary();
    }
    //creates new book and adds to list
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
    //change read status
    document.body.addEventListener("click", function(e){
        if(e.target.id == "toggleRead"){
            var readStatus = e.target.parentElement.parentElement.querySelector("#readStatus");
            if(readStatus.innerHTML == "Read"){
                readStatus.innerHTML = "Not Read";
            }
            else{
                readStatus.innerHTML = "Read"
            }
        }
    });
    //remove book from list
    document.body.addEventListener("click", function(e){
        if(e.target.id == "rmvBook"){
            e.target.parentElement.parentElement.remove();
        }
    });
}
