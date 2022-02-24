let navbar = document.querySelector(".navbar");
let iconMenu = document.querySelector(".icon-mobile");

iconMenu.addEventListener("click", () => {
  let verificar = navbar.classList.contains("ativo");

  if (verificar != true) {
    navbar.classList.add("ativo");
    iconMenu.classList.add("ativo");
  } else {
    navbar.classList.remove("ativo");
    iconMenu.classList.remove("ativo");
  }
});
