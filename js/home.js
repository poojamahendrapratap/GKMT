$(document).ready(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 100 && $(window).width() > 600) {
		$("nav").css({
			"background-color": "rgb(30, 57, 87)",
			"box-shadow": "0px 0px 10px rgba(0,0,0,0.5)",
			height: "60px",
		});
		$("#logo").css("height", "50px");
	} else {
		$("nav").css({
			background: "rgba(0,0,0,0)",
			"box-shadow": "0px 0px 0px rgba(255,255,255,0)",
			height: "80px",
		});
		$("#logo").css("height", "60px");
	}

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100 && $(window).width() > 600) {
			$("nav").css({
				"background-color": "rgb(30, 57, 87)",
				"box-shadow": "0px 0px 10px rgba(0,0,0,0.5)",
				height: "60px",
			});
			$("#logo").css("height", "50px");
		} else {
			$("nav").css({
				background: "rgba(0,0,0,0)",
				"box-shadow": "0px 0px 0px rgba(255,255,255,0)",
				height: "80px",
			});
			$("#logo").css("height", "60px");
		}
	});
});
