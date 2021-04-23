let sliderPost;
let sliderSectionPost;
let sliderSectionLastPost;

let btnLeftPost;
let btnRightPost;

let intervalPost = 0;

function initSliderPost() {
    sliderPost = document.getElementById("slider-post");
    sliderSectionPost = document.getElementsByClassName("slider__section-post");
    sliderSectionLastPost = sliderSectionPost[sliderSectionPost.length - 1];
    btnLeftPost = document.getElementById("btn-left-post").addEventListener('click', function () {
        prevPost();
    });
    btnRightPost = document.getElementById("btn-right-post").addEventListener('click', function () {
        nextPost();
    });
    //sliderPost.insertAdjacentElement('afterbegin', sliderSectionLastPost);
}

function clearSliderPost() {
    sliderPost = null;
    sliderSectionPost = null;
    sliderSectionLastPost = null;
    btnLeftPost = null;
    btnRightPost = null;
    stopIntervalPost();
}

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
