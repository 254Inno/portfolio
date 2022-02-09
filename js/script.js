"use strict";
// document.querySelector("body").textContent = "js connected";
const navMobileBtn = document.querySelector(".nav__mobile--btn");
const navMobile = document.querySelector(".nav__mobile");
const services = document.querySelectorAll(".services__box--info");
const serviceNext = document.querySelector(".services__icon--right");
const servicePrev = document.querySelector(".services__icon--left");
const map = document.querySelectorAll(".map");
const mobile = document.querySelector(".mobile");

let serviceNumber = 0;

navMobileBtn.addEventListener("click", function () {
  navMobile.classList.toggle("mobile");
});
mobile.addEventListener("click", function () {
  navMobile.classList.toggle("mobile");
});

serviceNext.addEventListener("click", function () {
  ++serviceNumber;
  if (serviceNumber === services.length) serviceNumber = 0;

  services[serviceNumber].classList.remove("hidden");
  map[serviceNumber].classList.add("active");
  if (serviceNumber >= 1 && serviceNumber <= services.length - 1) {
    services[serviceNumber - 1].classList.add("hidden");
    map[serviceNumber - 1].classList.remove("active");
  } else if (serviceNumber == 0) {
    services[services.length - 1].classList.add("hidden");
    map[map.length - 1].classList.remove("active");
  }
});
servicePrev.addEventListener("click", function () {
  --serviceNumber;
  if (serviceNumber === -1) serviceNumber = services.length - 1;
  services[serviceNumber].classList.remove("hidden");
  map[serviceNumber].classList.add("active");
  console.log(serviceNumber);
  if (serviceNumber <= services.length - 2 && serviceNumber >= 0) {
    console.log(serviceNumber);
    services[serviceNumber + 1].classList.add("hidden");
    map[serviceNumber + 1].classList.remove("active");
  } else if (serviceNumber == services.length - 1) {
    services[0].classList.add("hidden");
    map[0].classList.remove("active");
  }
});
