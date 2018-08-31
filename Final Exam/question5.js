/**
 * Author: Yan Wang
 * Date: 2018-07
 */

$(document).ready(function () {
    $("p").css('color', 'red');
    $("#img1").click(function () {
        $(this).css("width", "50");
    });

    var img2 = document.querySelectorAll("#img2");

    console.log(img2.length);

    for (var i = 0; i < img2.length; i++) {
        img2[i].addEventListener("dblclick", myFunction);
    }

    function myFunction() {
        this.style.width = "50px";
    }

});
