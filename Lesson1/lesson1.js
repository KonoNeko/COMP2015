// Third way of writing js - in external file, no script tags
// document.getElementById('myH1').style.color = 'green';  // DOES NOT WORK - still in the head and #myH1 does not exist yet

window.onload = function() {
  document.getElementById('myH1').style.color = 'cornflowerblue';
}
