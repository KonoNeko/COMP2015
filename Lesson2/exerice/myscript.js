window.onload = function(){
  var newArray = ['red', 'blue', 'purple'];
  var allPara = document.getElementsByTagName('p');
  console.log(allPara);

  for(let i = 0; i < allPara.length; i++)
  {
    allPara[i].style.color = newArray[i];
  }
}
