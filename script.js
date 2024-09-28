//Creating object constructors
// I begin by declaring a function (since this is what a constructor is, it's not an object, but a function for defining objects, i think)
function Book(title, author, pages, read) {
    //The this keyword refers to the objects property given by its name and assigned according to the parameter entry.
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages, 10);
    //Not even sure if the below makes sense...
    this.read = Boolean(read);
    //Powerful. Creating functions within objects. Called methods.
    this.bookInfo = function() {
        return (title + author + pages + read);
    }
}
const CrimeandPunishment = new Book("Crime and Punishment", "Fyodor Dostoyevsky", "777", "false");

console.log(CrimeandPunishment.bookInfo());