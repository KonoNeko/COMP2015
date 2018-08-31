/*
 * Author: Yan Wang
 * Date: 2018-06
 */

window.onload = function () {
    // Part 1
    var myTime = new Date();
    window.alert((myTime.getHours() % 12) + ":" + (myTime.getMinutes() < 10 ? '0' : '') + myTime.getMinutes());
    
    // Part 2
    var usernames = ['Amber', 'Lily', 'Jasmine', 'Tiffany', 'Abby', 'Linda'];
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].indexOf('i') > -1) {
            alert(usernames[i]);
        }
        // a shorter way: if(soemthing.include()){}
    }

    // Part 3
    document.links[0].style = 'text-decoration: none';
    document.links[1].style = 'text-decoration: none';
    document.links[2].style = 'text-decoration: none';
    // or something.style.decoration = 'none';


    // Part 4
    var myDivs = document.getElementsByTagName('div');
    for (let i = 0; i < myDivs.length; i++) {
        myDivs[i].className += "message";
        myDivs[i].style.width = "100px";
        myDivs[i].style.height = "100px";

        // generate 3 random values
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        myDivs[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    }
}

