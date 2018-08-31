/**
 * Author: Yan Wang
 * Date: 2018-07
 */

window.onload = function () {

    var newH1 = document.createElement("h1");
    var newContent = document.createTextNode("DOM Scripting");
    newH1.appendChild(newContent);
    document.body.appendChild(newH1);

    var newDiv = document.createElement("div");
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.style.backgroundColor = "red";

    var newImg = document.createElement("img");
    newImg.src = 'a.jpg';
    newImg.id = 'img3';
    newDiv.appendChild(newImg);
    document.body.appendChild(newDiv);

    var timerID = null;

    var button = document.querySelectorAll('#img3');
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = run;
    }

    var flag = true;

    function run() {
        if (flag == true) {
            clearTimeout(timerID); // in order to move the image more than once
            timerID = setTimeout(startSlideShow, 3000);
        }
        else if (flag == false) {
            timerID = null;
            flag = true;
        }
    }

    var container = document.getElementsByTagName('div');
    container[0].style.position='absolute';//relative or fixed
    button[0].style.position='absolute';//relative or fixed


    position = 0;
    function startSlideShow() {
        if (position > -1800) {
            position += 100;
        }
        else {
            position = 0;
        }
        for (let i = 0; i < container.length; i++) {
            button[i].style.left = position + "px";
        }
    }

}