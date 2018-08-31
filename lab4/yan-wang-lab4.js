/**
 * Author: Yan Wang
 * Date: 2018-07
 */

// Part 1
window.onload = function () {

    // Part 2
    var imgs = document.querySelectorAll(".slide img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "lab4-images/dog" + i + ".jpg";
    }

    // Part 3
    var timerID = null;
    var position = 0;

    var button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = run;
    }

    function run() {
        if (timerID === null) {
            timerID = setInterval(startSlideShow, 4000);
        }
        else {
            clearInterval(timerID);
            timerID = null;
        }
    }

    // Part 4
    var container = document.getElementsByClassName('slide-container');

    function startSlideShow() {
        if (position > -1800) {
            position -= 600;
        }
        else {
            position = 0;
        }
        for (let i = 0; i < container.length; i++) {
            container[i].style.left = position + "px";
        }
    }
}