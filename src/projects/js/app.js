document.addEventListener('DOMContentLoaded', function() {


    var nextBtn = document.getElementById('nextPicture');
    var prevBtn = document.getElementById('prevPicture');
    var slides = document.getElementsByClassName("slider-image");
    var slideIndex = 0;

    console.log(nextBtn);
    console.log(prevBtn);
    console.log(slides);
    console.log(slideIndex);


    slides[slideIndex].classList.toggle('visible');

    nextBtn.addEventListener('click', function(nextImg) {
            console.log('Next btn clicked');

            slides[slideIndex].classList.toggle('visible');
            if (slideIndex < slides.length - 1) {
                slideIndex += 1;
            } else {
                slideIndex = 0;
            }
        slides[slideIndex].classList.toggle('visible');
    });

prevBtn.addEventListener('click', function(prevImg) {
    console.log("prev btn clicked");

        slides[slideIndex].classList.toggle('visible');
        if (slideIndex > 0) {
          slideIndex -=1;
        }else {
          slideIndex=slides.length - 1;
        }
        slides[slideIndex].classList.toggle('visible');

});

});
