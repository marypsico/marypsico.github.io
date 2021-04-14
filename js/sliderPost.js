const sliderPost = document.getElementById("slider-post");
let sliderSectionPost = document.getElementsByClassName("slider__section-post");
let sliderSectionLastPost = sliderSectionPost[sliderSectionPost.length - 1];

const btnLeftPost = document.getElementById("btn-left-post");
const btnRightPost = document.getElementById("btn-right-post");

sliderPost.insertAdjacentElement('afterbegin', sliderSectionLastPost);

function nextPost() {
    let sliderSectionFirst = document.getElementsByClassName("slider__section-post")[0];
    sliderPost.style.marginLeft = "-200%";
    sliderPost.style.transition = "all 0.5s";
    setTimeout(function () {
        sliderPost.style.transition = "none";
        sliderPost.insertAdjacentElement('beforeend', sliderSectionFirst);
        sliderPost.style.marginLeft = "-100%";
    }, 500);
}

function prevPost() {
    let sliderSectionPost = document.getElementsByClassName("slider__section-post");
    let sliderSectionLastPost = sliderSectionPost[sliderSectionPost.length - 1];
    sliderPost.style.marginLeft = "0";
    sliderPost.style.transition = "all 0.5s";
    setTimeout(function () {
        sliderPost.style.transition = "none";
        sliderPost.insertAdjacentElement('afterbegin', sliderSectionLastPost);
        sliderPost.style.marginLeft = "-100%";
    }, 500);
}

let intervalPost = 0;

function startIntervalPost() {
    if (intervalPost < 1)
        intervalPost = setInterval(function () {
            nextPost();
        }, 4000);
}

function stopIntervalPost() {
    if (intervalPost > 0)
        clearInterval(intervalPost);
    intervalPost = 0;
}

//startIntervalPost();

btnRightPost.addEventListener('click', function () {
    nextPost();
    //startIntervalPost();
});

btnLeftPost.addEventListener('click', function () {
    prevPost();
    //stopIntervalPost();
});
