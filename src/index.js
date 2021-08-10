const checkbox = document.getElementById("checkbox");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".main-container");
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".sidebar-toggle");
const toggleClose = document.querySelector(".toggle-close");
const blog = document.querySelector(".blog-container");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  container.classList.toggle("active");
  nav.classList.toggle("active");
});

const about = document.querySelector(".about");

// main.addEventListener("resize", function () {
//   console.log(window.documentElement.clientWidth);
// });

function displayWindowSize() {
  var w = document.documentElement.clientWidth;

  if (w < 720) {
    about.classList.toggle("about");
    about.classList.toggle("small");
  } else {
    about.classList.add("about");
    about.classList.remove("small");
  }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();
