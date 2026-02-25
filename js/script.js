"use strict";

const websiteBody = document.body;

const headingOne = document.querySelector("h1");

websiteBody.style.background = "yellow";

headingOne.style.fontSize = "3rem";
headingOne.style.color = "Maroon";

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (paragraph) {
  paragraph.style.fontSize = "2rem";
  paragraph.style.fontWeight = "700";
});


let listItemOne = document.querySelector("#list-item-one");
listItemOne.style.fontSize = "1.2rem";
listItemOne.style.listStyleType = "circle";


let listItemTwo = document.querySelector("#list-item-two");
listItemTwo.style.fontSize = "1.2rem";
listItemTwo.style.listStyleType = "disc";

let listItemThree = document.querySelector("#list-item-three");
listItemThree.style.fontSize = "1.2rem";
listItemThree.style.listStyleType = "square";


const ul = document.querySelector("ul");
ul.style.fontSize = "22px";







