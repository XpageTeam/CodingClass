import {TweenLite} from "gsap/TweenMax"
import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		const animateElements = document.querySelectorAll(".advantage, .programm-item, .how-item");

		if (!animateElements.length)
			return

		for (var element of animateElements){
			element.addEventListener("mouseenter", function(){
				const el = this;

				TweenLite.to(el, .25, {
					y: -30,
					onComplete(){
						TweenLite.to(el, .25, {
							y: 0
						})
					}
				})
			})
		}
	})()

	;(function(){
		const animateElements = document.querySelectorAll(".advantage, .programm-item, .person, .for, .how-item");

		if (!animateElements.length)
			return

		for (var element of animateElements)
			TweenLite.set(element, {
				autoAlpha: 0
			})

		const forElements = _ => {
			let i = 0;
			for (var element of animateElements){
				if (isScrolledIntoView(element) && element.getAttribute("style") == "visibility: hidden; opacity: 0;"){
					showElement(element, i)
					i++
				}
			}
		}

		forElements()

		window.addEventListener("scroll", forElements)
		window.addEventListener("tocuhmove", forElements)
	})()
})

const showElement = (element, pos) => {
	TweenLite.to(element, .4, {
		autoAlpha: 1,
		delay: pos * .2
	})
};

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}