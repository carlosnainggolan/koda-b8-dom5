let password = document.getElementById("password");
let toggler = document.getElementById("toggle-password");

toggler.addEventListener("click", hideShowPassword);

function hideShowPassword() {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        toggler.classList.remove("bi-eye-slash");
        toggler.classList.add("bi-eye");
    } else {
        password.setAttribute("type", "password");
        toggler.classList.remove("bi-eye");
        toggler.classList.add("bi-eye-slash");
    }
}

const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')

toggleMenu.addEventListener('click', function () {
    navbar.classList.toggle('show')
})
