let slider;
let sliderSection;
let sliderSectionLast;

let btnLeft;
let btnRight;

let interval = 0;

function initSlider() {
    console.log("SCRIPT")
    slider = document.querySelector("#slider");
    sliderSection = document.querySelectorAll(".slider__section");
    sliderSectionLast = sliderSection[sliderSection.length - 1];
    btnLeft = document.querySelector("#btn-left").addEventListener('click', function () {
        prev();
        stopInterval();
    });
    btnRight = document.querySelector("#btn-right").addEventListener('click', function () {
        next();
        startInterval();
    });
    //slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    startInterval();
}

function clearSlider() {
    console.log("CLEAR")
    stopInterval();
    slider = null;
    sliderSection = null;
    sliderSectionLast = null;
    btnLeft = null;
    btnRight = null;
}

function next() {
    console.log("NEXT");
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    console.log("PREV");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function startInterval() {
    if (interval < 1)
        interval = setInterval(function () {
            next();
        }, 4000);
    console.log("INTERVAL", interval);
}

function stopInterval() {
    if (interval > 0)
        clearInterval(interval);
    interval = 0;
}


