import $ from "jquery"
// import is from "is_js"

// import "selectize/dist/js/selectize.min.js"

// import "slick-carousel"
// import "./standart-page.js"
// import "./main-page.js"

// import "./forms.js"

import {sameHeights} from "x-widgets.js"


window.$ = $;
window.jQuery = $;

let scrollTimeout;

document.addEventListener("DOMContentLoaded", e => {
	require("./jquery.fancybox.js")
	require("../css/jquery.fancybox.css")

	sameHeights($(".person__whois"))
	
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		beforeClose(instance, slide){

		}
	})
})