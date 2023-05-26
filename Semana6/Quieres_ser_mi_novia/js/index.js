"use strict";

const documentReady = () => {
  const heroTitle = document.getElementById("heroTitle");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  const getPartner = () => {
    alert("❤️❤️❤️ Acepto ❤️❤️😍");
    location.href = "https://www.youtube.com/watch?v=ZDgyVKHuG8M";
  };
  const brokenHeart = () => {
    noButton.style.top = Math.random() * innerHeight + "px";
    noButton.style.left = Math.random() * innerWidth + "px";
  };
  const partner = prompt("😍 dime tu nombre 😍");
  heroTitle.innerText += ` ${partner || "Anonimo"} ?❤️`;

  yesButton.addEventListener("click", getPartner);
  noButton.addEventListener("mouseover", brokenHeart);
};

document.addEventListener("DOMContentLoaded", documentReady);
