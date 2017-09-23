var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Приветствуем, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Приветствуем, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image_1.jpg') {
      myImage.setAttribute ('src','images/image_2.jpg');
    } else {
      myImage.setAttribute ('src','images/image_1.jpg');
    }
}

