function getRandomInRange31(min31, max31) {
	return Math.floor(Math.random() * (max31 - min31 + 1)) + min31;
}
function getRandomInRange32(min32, max32) {
	return Math.floor(Math.random() * (max32 - min32 + 2)) + min32 * 3;
}
function getRandomInRange33(min33, max33) {
	return Math.floor(Math.random() * (max33 - min33 + 3)) + min33 * 5;
}
function getRandomInRange34(min34, max34) {
	return Math.floor(Math.random() * (max34 - min34 + 4)) - min34 * 7;
}
function getRandomInRange35(min35, max35) {
	return Math.floor(Math.random() * (max35 - min35 + 5)) + min35 * 9;
}
function getRandomInRange36(min36, max36) {
	return Math.floor(Math.random() * (max36 + min36 - 6)) + min36 + 11;
}
function getRandomInRange37(min37, max37) {
	return Math.floor(Math.random() * (max37 + min37 - 7)) - min37 * 13;
}
function getRandomInRange38(min38, max38) {
	return Math.floor(Math.random() * (max38 + min38 - 8)) + min38 * 15;
}
function getRandomInRange39(min39, max39) {
	return Math.floor(Math.random() * (max39 + min39 - 9)) + min39 * 17;
}
function getRandomInRange40(min40, max40) {
	return Math.floor(Math.random() * (max40 + min40 - 10)) - min40 * 19;
}

const box3 = document.getElementById("canvas4"),
	ctx3 = box3.getContext("2d");
let dpi3 = window.devicePixelRatio;

function fix_dpi3() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(box3).getPropertyValue("height").slice(0, -2);
		},
		width() {
			return +getComputedStyle(box3).getPropertyValue("width").slice(0, -2);
		},
	}; //set the correct attributes for a crystal clear image!
	box3.setAttribute("width", style.width() * dpi3);
	box3.setAttribute("height", style.height() * dpi3);
}

let x31,
	y31,
	x32,
	y32,
	x33,
	y33,
	x34,
	y34,
	x35,
	y35,
	x36,
	y36,
	x37,
	y37,
	x38,
	y38,
	x39,
	y39,
	x40,
	y40,
	dx31 = 0.1,
	dy31 = 0.1,
	dx32 = 0.04,
	dy32 = 0.04,
	dx33 = 0.05,
	dy33 = 0.05,
	dx34 = 0.06,
	dy34 = 0.06,
	dx35 = 0.07,
	dy35 = 0.07,
	dx36 = 0.08,
	dy36 = 0.08,
	dx37 = 0.09,
	dy37 = 0.09,
	dx38 = 0.035,
	dy38 = 0.035,
	dx39 = 0.045,
	dy39 = 0.045,
	dx40 = 0.055,
	dy40 = 0.055,
	img31 = new Image(),
	img32 = new Image(),
	img33 = new Image(),
	img34 = new Image(),
	img35 = new Image(),
	img36 = new Image(),
	img37 = new Image(),
	img38 = new Image(),
	img39 = new Image(),
	img40 = new Image();

img31.src = "images/portfolio-images/imoto1.png";
img32.src = "images/portfolio-images/imoto2.png";
img33.src = "images/portfolio-images/imoto3.png";
img34.src = "images/portfolio-images/imoto4.png";
img35.src = "images/portfolio-images/imoto5.png";
img36.src = "images/portfolio-images/imoto1.png";
img37.src = "images/portfolio-images/imoto2.png";
img38.src = "images/portfolio-images/imoto3.png";
img39.src = "images/portfolio-images/imoto4.png";
img40.src = "images/portfolio-images/imoto5.png";

img31.onload = function () {
	x31 = getRandomInRange31(0, box3.width - 10);
	y31 = getRandomInRange31(0, box3.height - 10);
	draw3();
	x32 = getRandomInRange32(0, box3.width - 10);
	y32 = getRandomInRange32(0, box3.height - 10);
	draw3();
	x33 = getRandomInRange33(0, box3.width - 10);
	y33 = getRandomInRange33(0, box3.height - 10);
	draw3();
	x34 = getRandomInRange34(0, box3.width - 10);
	y34 = getRandomInRange34(0, box3.height - 10);
	draw3();
	x35 = getRandomInRange35(0, box3.width - 10);
	y35 = getRandomInRange35(0, box3.height - 10);
	draw3();
	x36 = getRandomInRange36(0, box3.width - 10);
	y36 = getRandomInRange36(0, box3.height - 10);
	draw3();
	x37 = getRandomInRange37(0, box3.width - 10);
	y37 = getRandomInRange37(0, box3.height - 10);
	draw3();
	x38 = getRandomInRange38(0, box3.width - 10);
	y38 = getRandomInRange38(0, box3.height - 10);
	draw3();
	x39 = getRandomInRange39(0, box3.width - 10);
	y39 = getRandomInRange39(0, box3.height - 10);
	draw3();
	x40 = getRandomInRange40(0, box3.width - 10);
	y40 = getRandomInRange40(0, box3.height - 10);
	draw3();
};

function draw3() {
	fix_dpi3();
	ctx3.clearRect(0, 0, box3.width, box3.height);
	ctx3.drawImage(img31, x31, y31, 20, 20);
	ctx3.drawImage(img32, x32, y32, 20, 20);
	ctx3.drawImage(img33, x33, y33, 20, 20);
	ctx3.drawImage(img34, x34, y34, 20, 20);
	ctx3.drawImage(img35, x35, y35, 20, 20);
	ctx3.drawImage(img36, x36, y36, 20, 20);
	ctx3.drawImage(img37, x37, y37, 20, 20);
	ctx3.drawImage(img38, x38, y38, 20, 20);
	ctx3.drawImage(img39, x39, y39, 20, 20);
	ctx3.drawImage(img40, x40, y40, 20, 20);

	if (x31 < 0 || x31 > box3.width - 10) {
		dx31 = -dx31;
	}
	if (y31 < 0 || y31 > box3.height - 10) {
		dy31 = -dy31;
	}
	if (x32 < 0 || x32 > box3.width - 10) {
		dx32 = -dx32;
	}
	if (y32 < 0 || y32 > box3.height - 10) {
		dy32 = -dy32;
	}
	if (x33 < 0 || x33 > box3.width - 10) {
		dx33 = -dx33;
	}
	if (y33 < 0 || y33 > box3.height - 10) {
		dy33 = -dy33;
	}
	if (x34 < 0 || x34 > box3.width - 10) {
		dx34 = -dx34;
	}
	if (y34 < 0 || y34 > box3.height - 10) {
		dy34 = -dy34;
	}
	if (x35 < 0 || x35 > box3.width - 10) {
		dx35 = -dx35;
	}
	if (y35 < 0 || y35 > box3.height - 10) {
		dy35 = -dy35;
	}
	if (x36 < 0 || x36 > box3.width - 10) {
		dx36 = -dx36;
	}
	if (y36 < 0 || y36 > box3.height - 10) {
		dy36 = -dy36;
	}
	if (x37 < 0 || x37 > box3.width - 10) {
		dx37 = -dx37;
	}
	if (y37 < 0 || y37 > box3.height - 10) {
		dy37 = -dy37;
	}
	if (x38 < 0 || x38 > box3.width - 10) {
		dx38 = -dx38;
	}
	if (y38 < 0 || y38 > box3.height - 10) {
		dy38 = -dy38;
	}
	if (x39 < 0 || x39 > box3.width - 10) {
		dx39 = -dx39;
	}
	if (y39 < 0 || y39 > box3.height - 10) {
		dy39 = -dy39;
	}
	if (x40 < 0 || x40 > box3.width - 10) {
		dx40 = -dx40;
	}
	if (y40 < 0 || y40 > box3.height - 10) {
		dy40 = -dy40;
	}

	x31 += dx31;
	y31 += dy31;
	x32 += dx32;
	y32 += dy32;
	x33 += dx33;
	y33 += dy33;
	x34 += dx34;
	y34 += dy34;
	x35 += dx35;
	y35 += dy35;
	x36 += dx36;
	y36 += dy36;
	x37 += dx37;
	y37 += dy37;
	x38 += dx38;
	y38 += dy38;
	x39 += dx39;
	y39 += dy39;
	x40 += dx40;
	y40 += dy40;

	window.requestAnimationFrame(draw3);
}
