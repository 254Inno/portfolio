"use strict";

//document elements selection

const navMobileBtn = document.querySelector(".nav__mobile--btn");
const navMobile = document.querySelector(".nav__mobile");
const services = document.querySelectorAll(".services__box--info");
const serviceNext = document.querySelector(".services__icon--right");
const servicePrev = document.querySelector(".services__icon--left");
const map = document.querySelectorAll(".map");
const mobile = document.querySelector(".mobile");
const navigation = document.querySelector(".nav__list");
const btnAbout = document.querySelector(".btn-about");
const cta = document.querySelector(".cta");
const nav = document.querySelector(".nav");
const serviceSection = document.querySelector(".services");
const hero = document.querySelector(".hero");

//closing and opening mobile nav

navMobileBtn.addEventListener("click", function () {
  navMobile.classList.toggle("mobile");
});
mobile.addEventListener("click", function () {
  navMobile.classList.toggle("mobile");
});

//service scroll

let serviceNumber = 0;

//service scroll next
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

//service scroll previous

servicePrev.addEventListener("click", function () {
  --serviceNumber;
  if (serviceNumber === -1) serviceNumber = services.length - 1;
  services[serviceNumber].classList.remove("hidden");
  map[serviceNumber].classList.add("active");

  if (serviceNumber <= services.length - 2 && serviceNumber >= 0) {
    services[serviceNumber + 1].classList.add("hidden");
    map[serviceNumber + 1].classList.remove("active");
  } else if (serviceNumber == services.length - 1) {
    services[0].classList.add("hidden");
    map[0].classList.remove("active");
  }
});

// smooth scroll
btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
  cta.scrollIntoView({ behavior: "smooth" });
});

const smoothScroll = function (e) {
  e.preventDefault();

  if (
    (e.target.classList.contains("nav__link") &&
      !(e.target.getAttribute("href") === "#")) ||
    e.target.classList.contains("nav__mobile--link")
  ) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

// smooth scroll on desktop
navigation.addEventListener("click", smoothScroll);

// smooth scroll on mobile
navMobile.addEventListener("click", smoothScroll);

//sticky navigation

const options = {
  root: null,
  rootMargin: "-80px",
  threshold: 0,
};

const observeNav = function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      nav.classList.remove("sticky");
    } else {
      nav.classList.add("sticky");
    }
  });
};

const observer = new IntersectionObserver(observeNav, options);
observer.observe(hero);
