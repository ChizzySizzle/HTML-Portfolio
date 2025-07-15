const menu = document.querySelector("#offscreen-menu");
const menuButton = document.querySelector("#menu-btn");

function ToggleMenu() {
    if (menu.classList.contains("show")){
        menu.classList.remove("show");
        menuButton.firstElementChild.innerHTML = "Menu";
    }
    else {
        menu.classList.add("show");
        menuButton.firstElementChild.innerHTML = "Close";
    }
}

menuButton.addEventListener("click", ToggleMenu);