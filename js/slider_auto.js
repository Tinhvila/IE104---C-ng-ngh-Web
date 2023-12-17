/* ==========SLIDER========= */

const sliderPrevBtn = document.getElementsByClassName("sliderPrevBtn")[0];
const sliderNextBtn = document.getElementsByClassName("sliderNextBtn")[0];
const imageContainer = document.getElementsByClassName("imageContainer")[0];
const mainContent = document.getElementsByClassName("mainContainter")[0];
const countSliderImg = document.querySelectorAll(".imageContainer img").length;
let currentSliderImg = 1;
let timeout;


function updateImg(timeChange = 4000) {
    let offsetWidthImg = window.innerWidth - 17;

    if (currentSliderImg > countSliderImg) {
        currentSliderImg = 1;
    }
    if (currentSliderImg < 1) {
        currentSliderImg = countSliderImg;
    }
    imageContainer.style.transform = `translateX(-${(currentSliderImg - 1) * offsetWidthImg}px)`;
    timeout = setTimeout(() => {
        currentSliderImg++;
        updateImg();
    }, timeChange)
}


sliderNextBtn.addEventListener("click", () => {
    currentSliderImg++;
    clearTimeout(timeout);
    updateImg();
})

sliderPrevBtn.addEventListener("click", () => {
    currentSliderImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();