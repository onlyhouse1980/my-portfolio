function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    let transVar = document.getElementById('navlinksmobile');
    transVar.style.transition = 'all .2s ease-in-out';
    mobileMenuClick();
    highlightActiveLink();
}

function mobileMenu() {
    let nav = document.getElementById("mobilenav");
    nav.classList.toggle("nav--open");
}

function removeOverlay() {
    let nav = document.getElementById("mobilenav");
    nav.classList.toggle("nav--open");
}

function mobileMenuClick() {
    const parent = document.querySelector(".header-content");

    parent.addEventListener("click", function(e) {
        const child = e.target.matches(".header__button, .header__button *");
        if (child) {
            mobileMenu();
        }
    })
}

function highlightActiveLink() {
    const currentLocation = location.href;
    const menuItem = document.getElementsByClassName('nav__link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("nav__link--active");   
        }
    }
}