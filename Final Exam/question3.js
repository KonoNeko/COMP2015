/**
 * Author: Yan Wang
 * Date: 2018-07
 */

window.onload = function () {

    disableLinks('bcit');
    function disableLinks(keyword) {
        var allLinks = document.links;
        for (let i = 0; i < allLinks.length; i++) {
            if (allLinks[i].href.indexOf(keyword) > -1) {
                allLinks[i].addEventListener("click", function (event) {
                    event.preventDefault();
                });
            }
        }
    }

}