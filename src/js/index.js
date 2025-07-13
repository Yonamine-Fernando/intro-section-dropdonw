const checkedBox = document.querySelector("#menu-hamburguer");
const menu = document.querySelector("#menus");
const overley = document.querySelector(".overlay")

console.log(menu);


checkedBox.addEventListener("change", () => {
    if (checkedBox.checked) {
        menu.classList.add("hidden");
        overley.classList.add("hidden")
    } else {
        menu.classList.remove("hidden");
         overley.classList.remove("hidden");
    }

});
