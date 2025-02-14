let slideIndex = 0; // Start from the first slide

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // If we reach the end, reset the index to show the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide and apply fade effect
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");

    // Set a timeout to move to the next slide after 4 seconds
    setTimeout(showSlides, 4000); // Change slides every 4 seconds
}

// Call the function to start the slideshow
showSlides();
