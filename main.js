const element = document.querySelector(".GLOBAL__gm2-headline-5");
const element2 = document.querySelector(".section-hero-header-title-subtitle > span:nth-child(1)");
element.style.setProperty("transform", "scale(1)");
element.style.setProperty("transform-origin", "left bottom");
//element.style.setProperty("color", "red");
var text = element.textContent;
element.textContent = "私たちの" + text;
var text2 = element2.textContent;
element2.textContent = "Our " + text2;