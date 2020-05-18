//jshint esversion: 6

let prevs = document.querySelectorAll(".prev");
let nexts = document.querySelectorAll(".next");
let testimonials = document.getElementById("testimonials");

for (let i = 0; i < prevs.length; i++) {
	prevs[i].addEventListener("click", function () {
		if (testimonials.offsetLeft >= 0) {
			return;
		}
		testimonials.style.left = testimonials.offsetLeft + testimonials.offsetWidth / 2 + "px";
	});
	
	nexts[i].addEventListener("click", function () {
		if (testimonials.offsetLeft <= -testimonials.offsetWidth / 4) {
			return;
		}
		testimonials.style.left = testimonials.offsetLeft - testimonials.offsetWidth / 2 + "px";
	});
}