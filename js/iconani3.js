function getRandomInRange21(min21, max21) {
	return Math.floor(Math.random() * (max21 - min21 + 1)) + min21;
}
function getRandomInRange22(min22, max22) {
	return Math.floor(Math.random() * (max22 - min22 + 2)) + min22 * 3;
}
function getRandomInRange23(min23, max23) {
	return Math.floor(Math.random() * (max23 - min23 + 3)) + min23 * 5;
}
function getRandomInRange24(min24, max24) {
	return Math.floor(Math.random() * (max24 - min24 + 4)) - min24 * 7;
}
function getRandomInRange25(min25, max25) {
	return Math.floor(Math.random() * (max25 - min25 + 5)) + min25 * 9;
}
function getRandomInRange26(min26, max26) {
	return Math.floor(Math.random() * (max26 + min26 - 6)) + min26 + 11;
}
function getRandomInRange27(min27, max27) {
	return Math.floor(Math.random() * (max27 + min27 - 7)) - min27 * 13;
}
function getRandomInRange28(min28, max28) {
	return Math.floor(Math.random() * (max28 + min28 - 8)) + min28 * 15;
}
function getRandomInRange29(min29, max29) {
	return Math.floor(Math.random() * (max29 + min29 - 9)) + min29 * 17;
}
function getRandomInRange30(min30, max30) {
	return Math.floor(Math.random() * (max30 + min30 - 10)) - min30 * 19;
}

const box2 = document.getElementById("canvas3"),
	ctx2 = box2.getContext("2d");
let dpi2 = window.devicePixelRatio;

function fix_dpi2() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(box2).getPropertyValue("height").slice(0, -2);
		},
		width() {
			return +getComputedStyle(box2).getPropertyValue("width").slice(0, -2);
		},
	}; //set the correct attributes for a crystal clear image!
	box2.setAttribute("width", style.width() * dpi2);
	box2.setAttribute("height", style.height() * dpi2);
}

let x21,
	y21,
	x22,
	y22,
	x23,
	y23,
	x24,
	y24,
	x25,
	y25,
	x26,
	y26,
	x27,
	y27,
	x28,
	y28,
	x29,
	y29,
	x30,
	y30,
	dx21 = 0.1,
	dy21 = 0.1,
	dx22 = 0.04,
	dy22 = 0.04,
	dx23 = 0.05,
	dy23 = 0.05,
	dx24 = 0.06,
	dy24 = 0.06,
	dx25 = 0.07,
	dy25 = 0.07,
	dx26 = 0.08,
	dy26 = 0.08,
	dx27 = 0.09,
	dy27 = 0.09,
	dx28 = 0.035,
	dy28 = 0.035,
	dx29 = 0.045,
	dy29 = 0.045,
	dx30 = 0.055,
	dy30 = 0.055,
	img21 = new Image(),
	img22 = new Image(),
	img23 = new Image(),
	img24 = new Image(),
	img25 = new Image(),
	img26 = new Image(),
	img27 = new Image(),
	img28 = new Image(),
	img29 = new Image(),
	img30 = new Image();

img21.src = "images/portfolio-images/opraah1.png";
img22.src = "images/portfolio-images/opraah2.png";
img23.src = "images/portfolio-images/opraah3.png";
img24.src = "images/portfolio-images/opraah4.png";
img25.src = "images/portfolio-images/opraah5.png";
img26.src = "images/portfolio-images/opraah1.png";
img27.src = "images/portfolio-images/opraah2.png";
img28.src = "images/portfolio-images/opraah3.png";
img29.src = "images/portfolio-images/opraah4.png";
img30.src = "images/portfolio-images/opraah5.png";

img21.onload = function () {
	x21 = getRandomInRange21(0, box2.width - 10);
	y21 = getRandomInRange21(0, box2.height - 10);
	draw2();
	x22 = getRandomInRange22(0, box2.width - 10);
	y22 = getRandomInRange22(0, box2.height - 10);
	draw2();
	x23 = getRandomInRange23(0, box2.width - 10);
	y23 = getRandomInRange23(0, box2.height - 10);
	draw2();
	x24 = getRandomInRange24(0, box2.width - 10);
	y24 = getRandomInRange24(0, box2.height - 10);
	draw2();
	x25 = getRandomInRange25(0, box2.width - 10);
	y25 = getRandomInRange25(0, box2.height - 10);
	draw2();
	x26 = getRandomInRange26(0, box2.width - 10);
	y26 = getRandomInRange26(0, box2.height - 10);
	draw2();
	x27 = getRandomInRange27(0, box2.width - 10);
	y27 = getRandomInRange27(0, box2.height - 10);
	draw2();
	x28 = getRandomInRange28(0, box2.width - 10);
	y28 = getRandomInRange28(0, box2.height - 10);
	draw2();
	x29 = getRandomInRange29(0, box2.width - 10);
	y29 = getRandomInRange29(0, box2.height - 10);
	draw2();
	x30 = getRandomInRange30(0, box2.width - 10);
	y30 = getRandomInRange30(0, box2.height - 10);
	draw2();
};

function draw2() {
	fix_dpi2();
	ctx2.clearRect(0, 0, box2.width, box2.height);
	ctx2.drawImage(img21, x21, y21, 20, 20);
	ctx2.drawImage(img22, x22, y22, 20, 20);
	ctx2.drawImage(img23, x23, y23, 20, 20);
	ctx2.drawImage(img24, x24, y24, 20, 20);
	ctx2.drawImage(img25, x25, y25, 20, 20);
	ctx2.drawImage(img26, x26, y26, 20, 20);
	ctx2.drawImage(img27, x27, y27, 20, 20);
	ctx2.drawImage(img28, x28, y28, 20, 20);
	ctx2.drawImage(img29, x29, y29, 20, 20);
	ctx2.drawImage(img30, x30, y30, 20, 20);

	if (x21 < 0 || x21 > box2.width - 10) {
		dx = -dx;
	}
	if (y21 < 0 || y21 > box2.height - 10) {
		dy = -dy;
	}
	if (x22 < 0 || x22 > box2.width - 10) {
		dx22 = -dx22;
	}
	if (y22 < 0 || y22 > box2.height - 10) {
		dy22 = -dy22;
	}
	if (x23 < 0 || x23 > box2.width - 10) {
		dx23 = -dx23;
	}
	if (y23 < 0 || y23 > box2.height - 10) {
		dy23 = -dy23;
	}
	if (x24 < 0 || x24 > box2.width - 10) {
		dx24 = -dx24;
	}
	if (y24 < 0 || y24 > box2.height - 10) {
		dy24 = -dy24;
	}
	if (x25 < 0 || x25 > box2.width - 10) {
		dx25 = -dx25;
	}
	if (y25 < 0 || y25 > box2.height - 10) {
		dy25 = -dy25;
	}
	if (x26 < 0 || x26 > box2.width - 10) {
		dx26 = -dx26;
	}
	if (y26 < 0 || y26 > box2.height - 10) {
		dy26 = -dy26;
	}
	if (x27 < 0 || x27 > box2.width - 10) {
		dx27 = -dx27;
	}
	if (y27 < 0 || y27 > box2.height - 10) {
		dy27 = -dy27;
	}
	if (x28 < 0 || x28 > box2.width - 10) {
		dx28 = -dx28;
	}
	if (y28 < 0 || y28 > box2.height - 10) {
		dy28 = -dy28;
	}
	if (x29 < 0 || x29 > box2.width - 10) {
		dx29 = -dx29;
	}
	if (y29 < 0 || y29 > box2.height - 10) {
		dy29 = -dy29;
	}
	if (x30 < 0 || x30 > box2.width - 10) {
		dx30 = -dx30;
	}
	if (y30 < 0 || y30 > box2.height - 10) {
		dy30 = -dy30;
	}

	x21 += dx21;
	y21 += dy21;
	x22 += dx22;
	y22 += dy22;
	x23 += dx23;
	y23 += dy23;
	x24 += dx24;
	y24 += dy24;
	x25 += dx25;
	y25 += dy25;
	x26 += dx26;
	y26 += dy26;
	x27 += dx27;
	y27 += dy27;
	x28 += dx28;
	y28 += dy28;
	x29 += dx29;
	y29 += dy29;
	x30 += dx30;
	y30 += dy30;

	window.requestAnimationFrame(draw2);
}
