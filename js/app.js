window.onload = function(){
	animateLogo();
	animateRobot();
	addSmoothScrolling();
	updateSliderControl();
};

window.onscroll = function(){
	updateSliderControl();
}

function animateLogo(){
	TweenMax.fromTo("#logo", 2.5, {
		css: {
			y: "-30px",
		}
	}, {
		css: {
			y: "20px",
		},

		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
}

function animateRobot(){
	var t = new TimelineMax({repeat: -1, ease: Sine.easeInOut});
	t.to("#android-robot", 0.2, {rotation: "-50deg"})
	.to("#android-robot", 0.5, {rotation: "-30deg"})
	.to("#android-robot", 1, {rotation: "-45deg"});
}

function updateSliderControl(){
	var links = document.querySelectorAll("#slider-control a");
	for(var i=0; i<links.length; i++){
		var link = links[i];
		// console.log(link);
		var section = document.querySelectorAll("div.section")[i];
		var sectionTop = section.offsetTop;
		var sectionBottom = sectionTop + section.offsetHeight;
		if(window.scrollY>=sectionTop && window.scrollY < sectionBottom){
			link.className="active";
		}else{
			link.className="";
		}
	}
}

function scrollToElement(element){
	var topOfElement = element.offsetTop;
	TweenMax.to(window, 1, {
		scrollTo:{
			y: topOfElement+"px",
		},

		ease: Power2.easeInOut,
	});
}

function addSmoothScrolling(){
	var links = document.querySelectorAll("#slider-control a");
	for(var i=0; i<links.length; i++){
		var link = links[i];
		var section = document.querySelectorAll("div.section")[i];
		(function(sec){
			// console.log(sec);
			link.addEventListener("click", function(e){
				// console.log(sec.offsetTop+"px");
				scrollToElement(sec);
				e.preventDefault();
			})
		})(section)
	}
}
