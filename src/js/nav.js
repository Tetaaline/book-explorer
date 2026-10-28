// Hamburger menu: show/hide the links on small screens
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

// Only run if this page has a menu button
if (menuButton && navLinks) {
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex");

  const isOpen = navLinks.classList.contains("flex");
  menuButton.setAttribute("aria-expanded", isOpen);
});
}