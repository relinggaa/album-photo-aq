const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const gede = document.querySelector(".gede");

container.addEventListener("click", (img) => {
  if ((img.className = "thumb")) {
    jumbo.src = img.target.src;
  }
});
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition === 0) {
    gede.classList.remove("gedescrol");
  } else {
    gede.classList.add("gedescrol");
  }
});
