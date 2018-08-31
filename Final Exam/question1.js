// Author: Yan Wang

/**
 * document: the HTML document displayed in the window. 
 * navigator: the window property to get browser information.
 * window: present the browser's window.
 * style: an HTML attribute that contains CSS.
 */

window.onload = function () {
    var img1 = document.images[0];
    var newWidth = 100;
    img1.style.width = newWidth + 'px';
    console.log('the width of the first image is: ' + img1.style.width);

}
