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

function ToggleDropdown(dropdown) {
    if (dropdown.parentElement.lastElementChild.classList.contains("show")){
        dropdown.parentElement.lastElementChild.classList.remove("show");
        dropdown.lastElementChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z"/><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>';
    }
    else {
        dropdown.parentElement.lastElementChild.classList.add("show");
        dropdown.lastElementChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11"/></svg>';
    }
}

function ChangeImage(thumbnail, newImage) {
    thumbnail.parentElement.parentElement.firstElementChild.src = newImage;
    thumbnail.style = "filter: brightness(50%)";
    
    let sibling  = thumbnail.parentElement.firstElementChild;
    
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== thumbnail) {
            sibling.style = "filter: brightness(100%)";
        }
        sibling = sibling.nextSibling;
    }
}

menuButton.addEventListener("click", ToggleMenu);
