/**
 * Author: Yan Wang
 * Date: 2018-07
 */

window.onload = function () {
    var allImgs = document.getElementsByTagName('img');
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].style.border = "4px solid red";
    }

    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(2019, 06, 01);
    console.log(firstDate);

    var today = new Date();
    console.log(today);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - today.getTime()) / (oneDay)));
    alert(diffDays + " are left until next Canada Day");

}