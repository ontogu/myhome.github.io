let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/nomercy-family.jpg') {
        myImage.setAttribute('src', 'images/nomercy-mom.jpg');
    } else {
        myImage.setAttribute('src', 'images/nomercy-family.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');

    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome to my home! ${myName}`;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let sotredName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to my home! ${sotredName}`;
}

myButton.onclick = function() {
    setUserName();
}