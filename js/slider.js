'use strict';

/*************
 * 
 *  SLIDER
 * 
 */

const nextImageTimeout = 4800;

const mainSlider = document.getElementById('mainSlider');
let sliderImagesArr = mainSlider.querySelectorAll('.slide-img');
let currentImage = 0;

if (sliderImagesArr.length > 1) setTimeout(showNextSlide, nextImageTimeout);

function showNextSlide() {
    if ( currentImage < sliderImagesArr.length - 1 ) {
        currentImage++;
        sliderImagesArr[currentImage].style.opacity = 1;
    } else {
        currentImage = 0;
        sliderImagesArr.forEach( (img, i) => {if (i > 0) img.style.opacity = 0;});
    }
    setTimeout(showNextSlide, nextImageTimeout);
}