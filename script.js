function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });
}
toggleMenu();

const ronds = document.querySelectorAll(".rond");

window.addEventListener("mousemove", (e) => {
  ronds.forEach((rond) => {
    rond.style.left = e.pageX + "px";
    rond.style.top = e.pageY + "px";
  });
});
