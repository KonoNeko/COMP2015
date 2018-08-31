/**
 * Author: Yan Wang
 * Date: 2018-07
 */

/** Part 1 */
window.onload = function () {
    // var ul = document.getElementsByClassName("userlist");
    // var li = document.getElementsByClassName("offline");
    // var newLi = document.createElement("li");

    // var newAttr = document.createElement("a");
    // newLi.className = "offline";
    // let order = 0;
    // for (let i = 0; i < li.length; i++) {
    //     li[i].style.color = 'red';  // use this instead
    //     order = i;
    // }
    // ul[order].appendChild(newLi);
    // newLi.appendChild(document.createTextNode("Four"));


    //var haha = document.getElementById('offline');
    //haha.setAttribute("href", "http://somelink.ca");

    //var li = document.createElement("li");
    //li[0].appendChild(document.createElement("li"));

    //let li = document.createElement("li");
    //textContent(li, "something");
    //ul.append(document.createTextNode("haha"));

    var nOffLinks = new Array();

    /** Part 2 */
    $("#addUser").click(function () {
        var name = prompt("Please enter your name");
        if (name == null)
            return "";
        var newName = name.replace(/\s+/g, ''); // ignore blank space
        if (jQuery.isEmptyObject(newName)) {
            window.alert("Please enter a name");
        }
        else {
            addUserFunction(newName);
        }
    });

    /** Part 2 end */

    /** Part 3 */
    var links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].className.indexOf('offline') <= -1) {
            links[i].style.color = 'white';
            nOffLinks.push(links[i]);
        }
        else {
            /** Part 5 */
            $(links[i]).click(function (event) {
                event.preventDefault();
            });
            /** Part 5 end */
        }

        $(nOffLinks[i]).hover(function () {
            nOffLinks[i].style.color = '#003366';
        }, function () {
            $(this).css("color", "white");
        });
        /** Part 4 end */
    }
    /** Part 3 end */

    /** Part 6 */
    var headernav = document.getElementsByClassName('header-nav');
    var menuimg = document.querySelector('img');
    $(menuimg).click(function () {

        for (let i = 0; i < headernav.length; i++)
            if (headernav[i].className.indexOf('hide') > -1) {
                $(headernav[i]).removeClass("hide");
                $(headernav[i]).addClass("show");
                menuimg.setAttribute('src', 'x.svg');
            }
            else if (headernav[i].className.indexOf('show') > -1) {
                $(headernav[i]).removeClass("show");
                $(headernav[i]).addClass("hide");
                menuimg.setAttribute('src', 'menu.svg');
            }
    });
    /** Part 6 end */
}