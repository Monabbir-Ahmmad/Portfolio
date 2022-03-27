const navbar = document.getElementById("navbar");
const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");

window.onscroll = () => {
  if (window.scrollY >= 2 * window.innerHeight) {
    navbar.classList.remove("nav-active");
  } else if (window.scrollY >= window.innerHeight) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation");
      } else {
        entry.target.classList.remove("animation");
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(aboutMe);
observer.observe(skills);
