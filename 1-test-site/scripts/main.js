const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/cat.jpg") {
        myImage.setAttribute("src", "images/cat_2.jpg");
    } else {
        myImage.setAttribute("src", "images/cat.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: ").trim();
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    if (!myName) {
        setUserName()
    } else {
        myHeading.textContent = `${myName}, welcome to Olum Code Camp`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `${storeName}, welcome to Olum Code Camp`;
}

myButton.onclick = () => {
    setUserName();
}