const checkedBox = document.querySelector("#menu-hamburguer");
const menu = document.querySelector("#menus");
const overlay = document.querySelector(".overlay")


checkedBox.addEventListener("change", () => {
    if (checkedBox.checked) {
        menu.classList.add("hidden");
        overlay.classList.add("hidden")
    } else {
        menu.classList.remove("hidden");
         overlay.classList.remove("hidden");
    }

});

overlay.addEventListener("click", () => {
  checkedBox.checked = false;
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
