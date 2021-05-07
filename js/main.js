let content = document.getElementById("content");

function changeRoute(route) {

    content.innerHTML = '';

    fetch("/pages/" + route)
        .then((response) => response.text())
        .then((html) => content.innerHTML = html)
        .then(() => {
            if (route == "inicio.html") {
                initSlider();
                initSliderPost();
            }
            else {
                clearSlider();
                clearSliderPost();
            }
        })
        .catch((error) => {
            console.warn(error);
        });
}

changeRoute('inicio.html');