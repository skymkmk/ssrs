var navbar =  document.getElementById("navbarChanger").classList;
var navBrand = document.getElementById("navBrand").classList;
var loading = document.getElementById("loading");
var body = document.getElementById("body");
var popUp = document.getElementById("pop-up");
function navbarBackground() {
    let windowHeight = window.innerHeight;
    let navbarPosition = window.scrollY;
    if (navbarPosition >= windowHeight - 76 && navbar.contains("navbar-dark")){
       navbar.remove("navbar-dark");
       navbar.add("navbar-light");
       navbar.add("navbar-background");
       navbar.add("shadow");
       navBrand.add("navBrand")
    }
    if (navbarPosition < windowHeight - 76 && navbar.contains("navbar-light")) {
        navbar.remove("navbar-light");
        navbar.remove("navbar-background");
        navbar.add("navbar-dark")
        navbar.remove("shadow");
        navBrand.remove("navBrand")
    }
}
function displayBody() {
    body.style.display="block"
    loading.style.transition = "all 1s";
    loading.style.opacity = 0;
    body.style.transition = "all 1s";
    body.style.opacity = 1;
    setTimeout("loading.style.display=\"none\"",3000);
}
popUp.addEventListener("animationend", displayBody);
setInterval("navbarBackground()",100);