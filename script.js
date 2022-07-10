var element = document.getElementsByClassName("hero")[0];
var randomNumber = Math.ceil(Math.random() * 2);
element.classList.add("hero" + randomNumber);
