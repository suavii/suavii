var header = document.querySelector("header");
var menuToggle = document.querySelector('.toggle');
var logo = document.querySelector('.logo');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})
menuToggle.onclick = function(){
            menuToggle.classList.toggle('active');
            header.classList.toggle("active");
        }

// Trailer
let videobtn = document.querySelector('.video-btn');
let clip1 = document.querySelector('.clip1');
let close = document.querySelector('.video-close');
let video = document.querySelector('video');
let isOpen = false;

// Set default volume to 50%
video.volume = 0.3;

videobtn.onclick = function(){
	videobtn.classList.add('active');
	clip1.classList.add('active');
	header.style.zIndex = "-1";
	isOpen = true;
}

close.onclick = function(){
	videobtn.classList.remove('active');
	clip1.classList.remove('active');
	header.style.zIndex = "999";
	video.pause();
	video.currentTime = 0;
	isOpen = false;
}

clip1.addEventListener('click', function(event) {
	if (event.target === clip1) {
		videobtn.classList.remove('active');
		clip1.classList.remove('active');
		header.style.zIndex = "999";
		video.pause();
		video.currentTime = 0;
		isOpen = false;
	}
});

clip1.addEventListener('transitionend', function() {
	if (isOpen) {
		video.play();
	}
});

video.onplay = function() {
	if (!isOpen) {
		video.pause();
	}
};


/* Set recaptcha as required 
----------------------------------------------*/
window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};

/* Update recaptcha size on smaller viewports 
----------------------------------------------*/
var width = $('.g-recaptcha').parent().width();
if (width < 302) {
	var scale = width / 302;
	$('.g-recaptcha').css('transform', 'scale(' + scale + ')');
	$('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
	$('.g-recaptcha').css('transform-origin', '0 0');
	$('.g-recaptcha').css('-webkit-transform-origin', '0 0');
}

        
/* ScrollToTop 
----------------------------------------------*/
// $(document).ready(function(){
	
// 	//Check to see if the window is top if not then display button
// 	$(window).scroll(function(){
// 		if ($(this).scrollTop() > 500) {
// 			$('.scrollToTop').fadeIn();
// 		} else {
// 			$('.scrollToTop').fadeOut();
// 		}
// 	});
	
// 	//Click event to scroll to top
// 	$('.scrollToTop').click(function(){
// 		$('html, body').animate({scrollTop : 0},300);
// 		return false;
// 	});
	
// });
	

// Load additional cards
$("#loadMore").on("click", function() {
	$(this).hide();
	$(".hidden").show();
});

// Portoflio cards
const clip = document.querySelectorAll('.clip');
        for (let i = 0; i<clip.length; i++){
            clip[i].addEventListener('mouseenter', function(e){
                clip[i].play() 
            })
            clip[i].addEventListener('mouseout', function(e){
                clip[i].pause() 
            })
        };

// Copyright year
const year = document.getElementById("year");
        const thisYear = new Date().getFullYear();
        year.setAttribute("datetime", thisYear);
        year.textContent = thisYear


// Animated logo
// const text = document.querySelector('.logoText p');
// text.innerHTML = text.innerText.split("").map(
//     (char, i) =>
//     `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
// ).join("")
