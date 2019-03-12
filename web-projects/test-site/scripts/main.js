let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/微信图片_20170914104845.jpg') {
      myImage.setAttribute('src', 'images/123.png');
    } else {
      myImage.setAttribute('src', 'images/微信图片_20170914104845.jpg');
    }
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Welcome 叁壹壹，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;