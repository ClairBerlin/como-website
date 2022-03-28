const navLinks = document.querySelectorAll('.nav-link')
const offcanvas = new bootstrap.Offcanvas(document.getElementById('navbarOffcanvasLg'))
navLinks.forEach(function (navLink) {
    console.log(navLink)
    navLink.onclick = function () {
        offcanvas.hide()
    }
})