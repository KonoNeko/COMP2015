/**
 * Author: Yan Wang
 * Date: 2018-07
 */

window.onload = function () {

    var elements = document.querySelectorAll("p");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function flyToTheMoon() {
            this.style.backgroundColor = 'yellow';
            this.classList.add("clicked");
            console.log(this.classList);
        };
        elements[i].onmouseover = function flyToTheSky() {
            this.style.fontStyle = 'italic';

        };
    }
}


