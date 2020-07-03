function getRandomInRange11(min11, max11) {
	return Math.floor(Math.random() * (max11 - min11 + 1)) + min11;
}
function getRandomInRange12(min12, max12) {
	return Math.floor(Math.random() * (max12 - min12 + 2)) + min12 * 3;
}
function getRandomInRange13(min13, max13) {
	return Math.floor(Math.random() * (max13 - min13 + 3)) + min13 * 5;
}
function getRandomInRange14(min14, max14) {
	return Math.floor(Math.random() * (max14 - min14 + 4)) - min14 * 7;
}
function getRandomInRange15(min15, max15) {
	return Math.floor(Math.random() * (max15 - min15 + 5)) + min15 * 9;
}
function getRandomInRange16(min16, max16) {
	return Math.floor(Math.random() * (max16 + min16 - 6)) + min16 + 11;
}
function getRandomInRange17(min17, max17) {
	return Math.floor(Math.random() * (max17 + min17 - 7)) - min17 * 13;
}
function getRandomInRange18(min18, max18) {
	return Math.floor(Math.random() * (max18 + min18 - 8)) + min18 * 15;
}
function getRandomInRange19(min19, max19) {
	return Math.floor(Math.random() * (max19 + min19 - 9)) + min19 * 17;
}
function getRandomInRange20(min20, max20) {
	return Math.floor(Math.random() * (max20 + min20 - 10)) - min20 * 19;
}

let box1 = document.getElementById("canvas2"),
	ctx1 = box1.getContext("2d");
let dpi1 = window.devicePixelRatio;

function fix_dpi1() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(box1).getPropertyValue("height").slice(0, -2);
		},
		width() {
			return +getComputedStyle(box1).getPropertyValue("width").slice(0, -2);
		},
	}; //set the correct attributes for a crystal clear image!
	box1.setAttribute("width", style.width() * dpi1);
	box1.setAttribute("height", style.height() * dpi1);
}

let x11,
	y11,
	x12,
	y12,
	x13,
	y13,
	x14,
	y14,
	x15,
	y15,
	x16,
	y16,
	x17,
	y17,
	x18,
	y18,
	x19,
	y19,
	x20,
	y20,
	dx11 = 0.1,
	dy11 = 0.1,
	dx12 = 0.04,
	dy12 = 0.04,
	dx13 = 0.05,
	dy13 = 0.05,
	dx14 = 0.06,
	dy14 = 0.06,
	dx15 = 0.07,
	dy15 = 0.07,
	dx16 = 0.08,
	dy16 = 0.08,
	dx17 = 0.09,
	dy17 = 0.09,
	dx18 = 0.035,
	dy18 = 0.035,
	dx19 = 0.045,
	dy19 = 0.045,
	dx20 = 0.055,
	dy20 = 0.055,
	img11 = new Image(),
	img12 = new Image(),
	img13 = new Image(),
	img14 = new Image(),
	img15 = new Image(),
	img16 = new Image(),
	img17 = new Image(),
	img18 = new Image(),
	img19 = new Image(),
	img20 = new Image();

img11.src = "images/portfolio-images/ascicon1.png";
img12.src = "images/portfolio-images/ascicon2.png";
img13.src = "images/portfolio-images/ascicon3.png";
img14.src = "images/portfolio-images/ascicon4.png";
img15.src = "images/portfolio-images/ascicon5.png";
img16.src = "images/portfolio-images/ascicon1.png";
img17.src = "images/portfolio-images/ascicon2.png";
img18.src = "images/portfolio-images/ascicon3.png";
img19.src = "images/portfolio-images/ascicon4.png";
img20.src = "images/portfolio-images/ascicon5.png";

img11.onload = function () {
	x11 = getRandomInRange11(0, box1.width - 10);
	y11 = getRandomInRange11(0, box1.height - 10);
	draw1();
	x12 = getRandomInRange12(0, box1.width - 10);
	y12 = getRandomInRange12(0, box1.height - 10);
	draw1();
	x13 = getRandomInRange13(0, box1.width - 10);
	y13 = getRandomInRange13(0, box1.height - 10);
	draw1();
	x14 = getRandomInRange14(0, box1.width - 10);
	y14 = getRandomInRange14(0, box1.height - 10);
	draw1();
	x15 = getRandomInRange15(0, box1.width - 10);
	y15 = getRandomInRange15(0, box1.height - 10);
	draw1();
	x16 = getRandomInRange16(0, box1.width - 10);
	y16 = getRandomInRange16(0, box1.height - 10);
	draw1();
	x17 = getRandomInRange17(0, box1.width - 10);
	y17 = getRandomInRange17(0, box1.height - 10);
	draw1();
	x18 = getRandomInRange18(0, box1.width - 10);
	y18 = getRandomInRange18(0, box1.height - 10);
	draw1();
	x19 = getRandomInRange19(0, box1.width - 10);
	y19 = getRandomInRange19(0, box1.height - 10);
	draw1();
	x20 = getRandomInRange20(0, box1.width - 10);
	y20 = getRandomInRange20(0, box1.height - 10);
	draw1();
};

function draw1() {
	fix_dpi1();
	ctx1.clearRect(0, 0, box1.width, box1.height);
	ctx1.drawImage(img11, x11, y11, 20, 20);
	ctx1.drawImage(img12, x12, y12, 20, 20);
	ctx1.drawImage(img13, x13, y13, 20, 20);
	ctx1.drawImage(img14, x14, y14, 20, 20);
	ctx1.drawImage(img15, x15, y15, 20, 20);
	ctx1.drawImage(img16, x16, y16, 20, 20);
	ctx1.drawImage(img17, x17, y17, 20, 20);
	ctx1.drawImage(img18, x18, y18, 20, 20);
	ctx1.drawImage(img19, x19, y19, 20, 20);
	ctx1.drawImage(img20, x20, y20, 20, 20);

	if (x11 < 0 || x11 > box1.width - 10) {
		dx = -dx;
	}
	if (y11 < 0 || y11 > box1.height - 10) {
		dy = -dy;
	}
	if (x12 < 0 || x12 > box1.width - 10) {
		dx12 = -dx12;
	}
	if (y12 < 0 || y12 > box1.height - 10) {
		dy12 = -dy12;
	}
	if (x13 < 0 || x13 > box1.width - 10) {
		dx13 = -dx13;
	}
	if (y13 < 0 || y13 > box1.height - 10) {
		dy13 = -dy13;
	}
	if (x14 < 0 || x14 > box1.width - 10) {
		dx14 = -dx14;
	}
	if (y14 < 0 || y14 > box1.height - 10) {
		dy14 = -dy14;
	}
	if (x15 < 0 || x15 > box1.width - 10) {
		dx15 = -dx15;
	}
	if (y15 < 0 || y15 > box1.height - 10) {
		dy15 = -dy15;
	}
	if (x16 < 0 || x16 > box1.width - 10) {
		dx16 = -dx16;
	}
	if (y16 < 0 || y16 > box1.height - 10) {
		dy16 = -dy16;
	}
	if (x17 < 0 || x17 > box1.width - 10) {
		dx17 = -dx17;
	}
	if (y17 < 0 || y17 > box1.height - 10) {
		dy17 = -dy17;
	}
	if (x18 < 0 || x18 > box1.width - 10) {
		dx18 = -dx18;
	}
	if (y18 < 0 || y18 > box1.height - 10) {
		dy18 = -dy18;
	}
	if (x19 < 0 || x19 > box1.width - 10) {
		dx19 = -dx19;
	}
	if (y19 < 0 || y19 > box1.height - 10) {
		dy19 = -dy19;
	}
	if (x20 < 0 || x20 > box1.width - 10) {
		dx20 = -dx20;
	}
	if (y20 < 0 || y20 > box1.height - 10) {
		dy20 = -dy20;
	}

	x11 += dx11;
	y11 += dy11;
	x12 += dx12;
	y12 += dy12;
	x13 += dx13;
	y13 += dy13;
	x14 += dx14;
	y14 += dy14;
	x15 += dx15;
	y15 += dy15;
	x16 += dx16;
	y16 += dy16;
	x17 += dx17;
	y17 += dy17;
	x18 += dx18;
	y18 += dy18;
	x19 += dx19;
	y19 += dy19;
	x20 += dx20;
	y20 += dy20;

	window.requestAnimationFrame(draw1);
}
