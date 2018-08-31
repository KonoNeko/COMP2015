/**
 * Author: Yan Wang
 * Date: 2018-07
 */

window.onload = function () {

    /** div1 css style */
    document.getElementById('div1').style.width = "100px";
    document.getElementById('div1').style.height = "100px";
    document.getElementById('div1').style.backgroundColor = 'red';

    /** Part 1 */
    var colors = ['blue', 'green', 'red'];

    /** Part 2 */
    var divs = document.querySelectorAll('#div2 p');

    for (let i = 0; i < divs.length; i++) {
        divs[i].onmouseenter = function () {
            divs[i].style.backgroundColor = colors[i]; // random from colors: math.random()* (max-min+1) + min
        }

        divs[i].onmouseleave = function () {
            divs[i].style.backgroundColor = 'white';
        }
    }

    /** Part 3 */
    $("#toggle").click(function () {
        document.getElementById('div1').style.height = "200px";
    });

    /** Part 4 */
    $(window).resize(function () {
        var winSize = window.innerWidth;
        var h1Elem = document.getElementsByTagName('h1');
        if (winSize < 800) {
            for (var i = 0; i < h1Elem.length; i++) {
                h1Elem[i].style.color = 'red';
            }
        } else {
            for (var i = 0; i < h1Elem.length; i++) {
                h1Elem[i].style.color = 'black';
            }
        }
    });
}



