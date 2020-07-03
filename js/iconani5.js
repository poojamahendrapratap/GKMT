function getRandomInRange41(min41, max41) {
	return Math.floor(Math.random() * (max41 - min41 + 1)) + min41;
}
function getRandomInRange42(min42, max42) {
	return Math.floor(Math.random() * (max42 - min42 + 2)) + min42 * 3;
}
function getRandomInRange43(min43, max43) {
	return Math.floor(Math.random() * (max43 - min43 + 3)) + min43 * 5;
}
function getRandomInRange44(min44, max44) {
	return Math.floor(Math.random() * (max44 - min44 + 4)) - min44 * 7;
}
function getRandomInRange45(min45, max45) {
	return Math.floor(Math.random() * (max45 - min45 + 5)) + min45 * 9;
}
function getRandomInRange46(min47, max46) {
	return Math.floor(Math.random() * (max46 + min47 - 6)) + min47 + 11;
}
function getRandomInRange47(min47, max47) {
	return Math.floor(Math.random() * (max47 + min47 - 7)) - min47 * 13;
}
function getRandomInRange48(min48, max48) {
	return Math.floor(Math.random() * (max48 + min48 - 8)) + min48 * 15;
}
function getRandomInRange49(min49, max49) {
	return Math.floor(Math.random() * (max49 + min49 - 9)) + min49 * 17;
}
function getRandomInRange50(min50, max50) {
	return Math.floor(Math.random() * (max50 + min50 - 10)) - min50 * 19;
}

const box4 = document.getElementById("canvas5"),
	ctx4 = box4.getContext("2d");
let dpi4 = window.devicePixelRatio;

function fix_dpi4() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(box4).getPropertyValue("height").slice(0, -2);
		},
		width() {
			return +getComputedStyle(box4).getPropertyValue("width").slice(0, -2);
		},
	}; //set the correct attributes for a crystal clear image!
	box4.setAttribute("width", style.width() * dpi4);
	box4.setAttribute("height", style.height() * dpi4);
}

let x41,
	y41,
	x42,
	y42,
	x43,
	y43,
	x44,
	y44,
	x45,
	y45,
	x46,
	y46,
	x47,
	y47,
	x48,
	y48,
	x49,
	y49,
	x50,
	y50,
	dx41 = 0.1,
	dy41 = 0.1,
	dx42 = 0.04,
	dy42 = 0.04,
	dx43 = 0.05,
	dy43 = 0.05,
	dx44 = 0.06,
	dy44 = 0.06,
	dx45 = 0.07,
	dy45 = 0.07,
	dx46 = 0.08,
	dy46 = 0.08,
	dx47 = 0.09,
	dy47 = 0.09,
	dx48 = 0.045,
	dy48 = 0.045,
	dx49 = 0.045,
	dy49 = 0.045,
	dx50 = 0.055,
	dy50 = 0.055,
	img41 = new Image(),
	img42 = new Image(),
	img43 = new Image(),
	img44 = new Image(),
	img45 = new Image(),
	img46 = new Image(),
	img47 = new Image(),
	img48 = new Image(),
	img49 = new Image(),
	img50 = new Image();

img41.src = "images/portfolio-images/chundari1.png";
img42.src = "images/portfolio-images/chundari2.png";
img43.src = "images/portfolio-images/chundari3.png";
img44.src = "images/portfolio-images/chundari4.png";
img45.src = "images/portfolio-images/chundari1.png";
img46.src = "images/portfolio-images/chundari1.png";
img47.src = "images/portfolio-images/chundari2.png";
img48.src = "images/portfolio-images/chundari3.png";
img49.src = "images/portfolio-images/chundari4.png";
img50.src = "images/portfolio-images/chundari2.png";

img41.onload = function () {
	x41 = getRandomInRange41(0, box4.width - 10);
	y41 = getRandomInRange41(0, box4.height - 10);
	draw4();
	x42 = getRandomInRange42(0, box4.width - 10);
	y42 = getRandomInRange42(0, box4.height - 10);
	draw4();
	x43 = getRandomInRange43(0, box4.width - 10);
	y43 = getRandomInRange43(0, box4.height - 10);
	draw4();
	x44 = getRandomInRange44(0, box4.width - 10);
	y44 = getRandomInRange44(0, box4.height - 10);
	draw4();
	x45 = getRandomInRange45(0, box4.width - 10);
	y45 = getRandomInRange45(0, box4.height - 10);
	draw4();
	x46 = getRandomInRange46(0, box4.width - 10);
	y46 = getRandomInRange46(0, box4.height - 10);
	draw4();
	x47 = getRandomInRange47(0, box4.width - 10);
	y47 = getRandomInRange47(0, box4.height - 10);
	draw4();
	x48 = getRandomInRange48(0, box4.width - 10);
	y48 = getRandomInRange48(0, box4.height - 10);
	draw4();
	x49 = getRandomInRange49(0, box4.width - 10);
	y49 = getRandomInRange49(0, box4.height - 10);
	draw4();
	x50 = getRandomInRange50(0, box4.width - 10);
	y50 = getRandomInRange50(0, box4.height - 10);
	draw4();
};

function draw4() {
	fix_dpi4();
	ctx4.clearRect(0, 0, box4.width, box4.height);
	ctx4.drawImage(img41, x41, y41, 20, 20);
	ctx4.drawImage(img42, x42, y42, 20, 20);
	ctx4.drawImage(img43, x43, y43, 20, 20);
	ctx4.drawImage(img44, x44, y44, 20, 20);
	ctx4.drawImage(img45, x45, y45, 20, 20);
	ctx4.drawImage(img46, x46, y46, 20, 20);
	ctx4.drawImage(img47, x47, y47, 20, 20);
	ctx4.drawImage(img48, x48, y48, 20, 20);
	ctx4.drawImage(img49, x49, y49, 20, 20);
	ctx4.drawImage(img50, x50, y50, 20, 20);

	if (x41 < 0 || x41 > box4.width - 10) {
		dx41 = -dx41;
	}
	if (y41 < 0 || y41 > box4.height - 10) {
		dy41 = -dy41;
	}
	if (x42 < 0 || x42 > box4.width - 10) {
		dx42 = -dx42;
	}
	if (y42 < 0 || y42 > box4.height - 10) {
		dy42 = -dy42;
	}
	if (x43 < 0 || x43 > box4.width - 10) {
		dx43 = -dx43;
	}
	if (y43 < 0 || y43 > box4.height - 10) {
		dy43 = -dy43;
	}
	if (x44 < 0 || x44 > box4.width - 10) {
		dx44 = -dx44;
	}
	if (y44 < 0 || y44 > box4.height - 10) {
		dy44 = -dy44;
	}
	if (x45 < 0 || x45 > box4.width - 10) {
		dx45 = -dx45;
	}
	if (y45 < 0 || y45 > box4.height - 10) {
		dy45 = -dy45;
	}
	if (x46 < 0 || x46 > box4.width - 10) {
		dx46 = -dx46;
	}
	if (y46 < 0 || y46 > box4.height - 10) {
		dy46 = -dy46;
	}
	if (x47 < 0 || x47 > box4.width - 10) {
		dx47 = -dx47;
	}
	if (y47 < 0 || y47 > box4.height - 10) {
		dy47 = -dy47;
	}
	if (x48 < 0 || x48 > box4.width - 10) {
		dx48 = -dx48;
	}
	if (y48 < 0 || y48 > box4.height - 10) {
		dy48 = -dy48;
	}
	if (x49 < 0 || x49 > box4.width - 10) {
		dx49 = -dx49;
	}
	if (y49 < 0 || y49 > box4.height - 10) {
		dy49 = -dy49;
	}
	if (x50 < 0 || x50 > box4.width - 10) {
		dx50 = -dx50;
	}
	if (y50 < 0 || y50 > box4.height - 10) {
		dy50 = -dy50;
	}

	x41 += dx41;
	y41 += dy41;
	x42 += dx42;
	y42 += dy42;
	x43 += dx43;
	y43 += dy43;
	x44 += dx44;
	y44 += dy44;
	x45 += dx45;
	y45 += dy45;
	x46 += dx46;
	y46 += dy46;
	x47 += dx47;
	y47 += dy47;
	x48 += dx48;
	y48 += dy48;
	x49 += dx49;
	y49 += dy49;
	x50 += dx50;
	y50 += dy50;

	window.requestAnimationFrame(draw4);
}
