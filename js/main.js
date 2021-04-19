let content = document.getElementById("content");
let scriptSlider = document.createElement('script');
let scriptSliderPost = document.createElement('script');

scriptSlider.src = 'js/slider.js';
scriptSliderPost.src = 'js/sliderPost.js';

function changeRoute(route) {
    //(window.event).preventDefault();
    content.innerHTML = '';
    

    fetch("/pages/" + route)
        .then((response) => response.text())
        .then((html) => {

            content.innerHTML = html;

            if (route == "inicio.html") {

                document.body.appendChild(scriptSlider);
                document.body.appendChild(scriptSliderPost);
            }
            else {
                document.body.removeChild(scriptSlider);
                document.body.removeChild(scriptSliderPost);
            }
        })
        .catch((error) => {
            console.warn(error);
        });
}

changeRoute('inicio.html');