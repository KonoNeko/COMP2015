/**
 * Author: Yan Wang
 * Date: 2018-07
 */

// object literal to create object
var myBook1 = { title: "Lean In", author: "Sheryl Sandberg", yearPublished: 2013, readBook: function () { console.log('Sheryl Sandberg reignited the conversation around women in the workplace.'); } };

// prototype to create object
function myBook2(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
}

myBook2.prototype.readBook = function () {
    console.log("People who viewed The Four: The Hidden Dna Of Amazon, Apple, Facebook, And Google ultimately bought:");
};

var mySecondBook = new myBook2("The Four", "Scott Galloway", 2017);

class myThirdBook {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

    }
    readBook() { console.log('“Significant...The book is both instructive and surprisingly moving.” —The New York Times    '); }
}

var myBook3 = new myThirdBook('PRINCIPLES: LIFE AND WORK', 'Ray Dalio', 2017);
myBook3.readBook();
console.log(myBook3);

var string1;
for (var property1 in mySecondBook) {
    string1 = `${property1}` + ": " + mySecondBook[property1];
    alert(string1);
}


// using class to create object

