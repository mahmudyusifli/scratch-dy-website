// Smooth scrolling when clicking on navbar links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const progressBarContainer = document.getElementById(
    "progress-bar-container"
  );

  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;

    const progress = (scrolled / (fullHeight - windowHeight)) * 100;
    progressBar.style.width = progress + "%";
  });
});
