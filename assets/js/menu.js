let navbar = document.querySelector(".navbar");
let iconMenu = document.querySelector(".icon-mobile");

iconMenu.addEventListener("click", () => {
  let verificar = navbar.classList.contains("ativo");

  if (verificar != true) {
    navbar.style.height = "100vh";
    setTimeout(() => {
      navbar.classList.add("ativo");
      iconMenu.classList.add("ativo");
    }, 100);
  } else {
    navbar.style.height = "0px";
    navbar.classList.remove("ativo");
    iconMenu.classList.remove("ativo");
  }
});
