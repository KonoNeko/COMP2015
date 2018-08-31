
// Wrap the entire script in a function 
// assigned to the window.onload event.

window.onload = function () {

    // Part 2

    var firstname = prompt("Please enter your first name");
    var lastname = prompt("Please enter your last name");
    console.log(firstname + ' ' + lastname);


    // Part 3

    var img1 = document.getElementById("img1");
    var width1 = img1.width;
    console.log('the width of the first image is: ' + width1);


    // two different ways to setup image's width.
    document.images[1].width = width1;
    document.images[2].style.width = width1 + 'px';

}

