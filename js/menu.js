let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');

function toggleMenu() {
    mainNav.classList.toggle('mostrar');
}

btnMenu.addEventListener('click', function () {
    toggleMenu();
});

const subMenuBtn = document.getElementsByClassName('submenu-btn');
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener('click', function () {
        if (window.innerWidth < 1024) {
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style")
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}
