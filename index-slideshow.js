let slideIndex = 0;
showSlideshow();

function() showSlideshow {
	let i;
	let slides = document.getElementsByClassName("slide");
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slide[slideIndex-1].style.display = "block";
	setTimeout(showSlideshow, 5250);
}