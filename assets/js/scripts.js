let navbar = document.querySelector(".header .flex .navbar");
let menuBtn = document.getElementById("menu-btn");

let profile = document.querySelector(".header .flex .profile");
let userBtn = document.getElementById("user-btn");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    profile.classList.remove("active");
};

userBtn.onclick = () => {
    profile.classList.toggle("active");
    navbar.classList.remove("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    profile.classList.remove("active");
};

//________________________________________
// Loading
//________________________________________
function loading() {
    document.querySelector(".loader").style.display = "none";
}

function fadeOut() {
    setInterval(loading, 2500);
}

window.onload = fadeOut();
