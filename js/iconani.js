function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInRange2(min2, max2) {
	return Math.floor(Math.random() * (max2 - min2 + 2)) + min2 * 3;
}
function getRandomInRange3(min3, max3) {
	return Math.floor(Math.random() * (max3 - min3 + 3)) + min3 * 5;
}
function getRandomInRange4(min4, max4) {
	return Math.floor(Math.random() * (max4 - min4 + 4)) - min4 * 7;
}
function getRandomInRange5(min5, max5) {
	return Math.floor(Math.random() * (max5 - min5 + 5)) + min5 * 9;
}
function getRandomInRange6(min6, max6) {
	return Math.floor(Math.random() * (max6 + min6 - 6)) + min6 + 11;
}
function getRandomInRange7(min7, max7) {
	return Math.floor(Math.random() * (max7 + min7 - 7)) - min7 * 13;
}
function getRandomInRange8(min8, max8) {
	return Math.floor(Math.random() * (max8 + min8 - 8)) + min8 * 15;
}
function getRandomInRange9(min9, max9) {
	return Math.floor(Math.random() * (max9 + min9 - 9)) + min9 * 17;
}
function getRandomInRange10(min10, max10) {
	return Math.floor(Math.random() * (max10 + min10 - 10)) - min10 * 19;
}

let box = document.getElementById("canvas1");
let ctx = box.getContext("2d");
let dpi = window.devicePixelRatio;

function fix_dpi() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(box).getPropertyValue("height").slice(0, -2);
		},
		width() {
			return +getComputedStyle(box).getPropertyValue("width").slice(0, -2);
		},
	}; //set the correct attributes for a crystal clear image!
	box.setAttribute("width", style.width() * dpi);
	box.setAttribute("height", style.height() * dpi);
}

let x,
	y,
	x2,
	y2,
	x3,
	y3,
	x4,
	y4,
	x5,
	y5,
	x6,
	y6,
	x7,
	y7,
	x8,
	y8,
	x9,
	y9,
	x10,
	y10,
	dx = 0.1,
	dy = 0.1,
	dx2 = 0.04,
	dy2 = 0.04,
	dx3 = 0.05,
	dy3 = 0.05,
	dx4 = 0.06,
	dy4 = 0.06,
	dx5 = 0.07,
	dy5 = 0.07,
	dx6 = 0.08,
	dy6 = 0.08,
	dx7 = 0.09,
	dy7 = 0.09,
	dx8 = 0.035,
	dy8 = 0.035,
	dx9 = 0.045,
	dy9 = 0.045,
	dx10 = 0.055,
	dy10 = 0.055,
	img1 = new Image(),
	img2 = new Image(),
	img3 = new Image(),
	img4 = new Image(),
	img5 = new Image(),
	img6 = new Image(),
	img7 = new Image(),
	img8 = new Image(),
	img9 = new Image(),
	img10 = new Image();

img1.src = "images/portfolio-images/knowbility1.svg";
img2.src = "images/portfolio-images/knowbility2.png";
img3.src = "images/portfolio-images/knowbility3.png";
img4.src = "images/portfolio-images/knowbility4.png";
img5.src = "images/portfolio-images/knowbility5.png";
img6.src = "images/portfolio-images/knowbility1.png";
img7.src = "images/portfolio-images/knowbility2.png";
img8.src = "images/portfolio-images/knowbility3.png";
img9.src = "images/portfolio-images/knowbility4.png";
img10.src = "images/portfolio-images/knowbility5.png";

img1.addEventListener(
	"load",
	function () {
		x = getRandomInRange(0, box.width - 10);
		y = getRandomInRange(0, box.height - 10);
		draw();
		x2 = getRandomInRange2(0, box.width - 10);
		y2 = getRandomInRange2(0, box.height - 10);
		draw();
		x3 = getRandomInRange3(0, box.width - 10);
		y3 = getRandomInRange3(0, box.height - 10);
		draw();
		x4 = getRandomInRange4(0, box.width - 10);
		y4 = getRandomInRange4(0, box.height - 10);
		draw();
		x5 = getRandomInRange5(0, box.width - 10);
		y5 = getRandomInRange5(0, box.height - 10);
		draw();
		x6 = getRandomInRange(0, box.width - 10);
		y6 = getRandomInRange(0, box.height - 10);
		draw();
		x7 = getRandomInRange2(0, box.width - 10);
		y7 = getRandomInRange2(0, box.height - 10);
		draw();
		x8 = getRandomInRange3(0, box.width - 10);
		y8 = getRandomInRange3(0, box.height - 10);
		draw();
		x9 = getRandomInRange4(0, box.width - 10);
		y9 = getRandomInRange4(0, box.height - 10);
		draw();
		x10 = getRandomInRange5(0, box.width - 10);
		y10 = getRandomInRange5(0, box.height - 10);
		draw();
	},
	false
);

function draw() {
	fix_dpi();

	ctx.clearRect(0, 0, box.width, box.height);
	ctx.drawImage(img1, x, y, 20, 20);
	ctx.drawImage(img2, x2, y2, 20, 20);
	ctx.drawImage(img3, x3, y3, 20, 20);
	ctx.drawImage(img4, x4, y4, 20, 20);
	ctx.drawImage(img5, x5, y5, 20, 20);
	ctx.drawImage(img6, x6, y6, 20, 20);
	ctx.drawImage(img7, x7, y7, 20, 20);
	ctx.drawImage(img8, x8, y8, 20, 20);
	ctx.drawImage(img9, x9, y9, 20, 20);
	ctx.drawImage(img10, x10, y10, 20, 20);

	if (x < 0 || x > box.width - 10) {
		dx = -dx;
	}
	if (y < 0 || y > box.height - 10) {
		dy = -dy;
	}
	if (x2 < 0 || x2 > box.width - 10) {
		dx2 = -dx2;
	}
	if (y2 < 0 || y2 > box.height - 10) {
		dy2 = -dy2;
	}
	if (x3 < 0 || x3 > box.width - 10) {
		dx3 = -dx3;
	}
	if (y3 < 0 || y3 > box.height - 10) {
		dy3 = -dy3;
	}
	if (x4 < 0 || x4 > box.width - 10) {
		dx4 = -dx4;
	}
	if (y4 < 0 || y4 > box.height - 10) {
		dy4 = -dy4;
	}
	if (x5 < 0 || x5 > box.width - 10) {
		dx5 = -dx5;
	}
	if (y5 < 0 || y5 > box.height - 10) {
		dy5 = -dy5;
	}
	if (x6 < 0 || x6 > box.width - 10) {
		dx6 = -dx6;
	}
	if (y6 < 0 || y6 > box.height - 10) {
		dy6 = -dy6;
	}
	if (x7 < 0 || x7 > box.width - 10) {
		dx7 = -dx7;
	}
	if (y7 < 0 || y7 > box.height - 10) {
		dy7 = -dy7;
	}
	if (x8 < 0 || x8 > box.width - 10) {
		dx8 = -dx8;
	}
	if (y8 < 0 || y8 > box.height - 10) {
		dy8 = -dy8;
	}
	if (x9 < 0 || x9 > box.width - 10) {
		dx9 = -dx9;
	}
	if (y9 < 0 || y9 > box.height - 10) {
		dy9 = -dy9;
	}
	if (x10 < 0 || x10 > box.width - 10) {
		dx10 = -dx10;
	}
	if (y10 < 0 || y10 > box.height - 10) {
		dy10 = -dy10;
	}

	x += dx;
	y += dy;
	x2 += dx2;
	y2 += dy2;
	x3 += dx3;
	y3 += dy3;
	x4 += dx4;
	y4 += dy4;
	x5 += dx5;
	y5 += dy5;
	x6 += dx6;
	y6 += dy6;
	x7 += dx7;
	y7 += dy7;
	x8 += dx8;
	y8 += dy8;
	x9 += dx9;
	y9 += dy9;
	x10 += dx10;
	y10 += dy10;

	window.requestAnimationFrame(draw);
}
