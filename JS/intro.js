const typeWriterElement = document.getElementById("typeWriter");
const btnAboutMe = document.getElementById("intro-btn-about");
const aboutMe = document.getElementById("about-me");

let i = 0;
const txt = "I'm Tajbir  |^◡^|";

function typeWriter() {
  if (i === 0) {
    typeWriterElement.innerHTML = "Hello world! ";
    i += 1;
    setTimeout(typeWriter, 1000);
  } else if (i <= txt.length) {
    typeWriterElement.innerHTML += txt.charAt(i - 1);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    i = 0;
    setTimeout(typeWriter, 2000);
  }
}

btnAboutMe.addEventListener("click", () => {
  aboutMe.scrollIntoView({
    behavior: "smooth",
  });
});

typeWriter();
