const secondaryNav = document.querySelector(".secondary-nav-items");

const openNav = () => {
  secondaryNav.style.right = "0";
};
const closeNav = () => {
  secondaryNav.style.right = "-100%";
};

let sections = document.querySelectorAll("section");
sections = Array.from(sections);
sections.push(document.querySelector("header"));
let navLinks = document.querySelectorAll("nav .nav-items ul li a");
window.onscroll = () => {
  console.log(sections);
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav .nav-items ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/* dark mood */

document.querySelector(".moon").onclick = () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    document.querySelector(".moon").classList.replace("fa-moon", "fa-sun");
  } else {
    document.querySelector(".moon").classList.replace("fa-sun", "fa-moon");
  }
};
