$(document).ready(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 80 && $(window).width() > 600) {
		$("nav").css({
			"background-color": "rgb(30, 57, 87)",
			"box-shadow": "0px 0px 10px rgba(0,0,0,0.5)",
		});
	} else if (scroll < 80 && $(window).width() > 600) {
		$("nav").css({
			background: "rgba(0,0,0,0)",
			"box-shadow": "0px 0px 0px rgba(255,255,255,0)",
		});
	}

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 80 && $(window).width() > 600) {
			$("nav").css({
				"background-color": "rgb(30, 57, 87)",
				"box-shadow": "0px 0px 10px rgba(0,0,0,0.5)",
			});
		} else if (scroll < 80 && $(window).width() > 600) {
			$("nav").css({
				background: "rgba(0,0,0,0)",
				"box-shadow": "0px 0px 0px rgba(255,255,255,0)",
			});
		}
	});
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("navbar").style.height = "60px";
		document.getElementById("logo").style.height = "50px";
	} else {
		document.getElementById("navbar").style.height = "70px";
		document.getElementById("logo").style.height = "60px";
	}
}
