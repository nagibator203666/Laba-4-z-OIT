function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_in_btn2 = document.querySelector("#sign-in-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");
  sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
});
  sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
});
  sign_up_btn2.addEventListener("click", () => {
      container.classList.add("sign-up-mode2");
});
  sign_in_btn2.addEventListener("click", () => {
      container.classList.remove("sign-up-mode2");
});            