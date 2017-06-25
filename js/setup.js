var stage = 0;
var ctx;
var right = "up";
var left = "up";
var up = "up";

function createCanvas() {
	var c = document.getElementById('game');
	ctx = c.getContext('2d');
}

function start() {
	document.removeEventListener("click", selectColor, false);
	stage = 1;
	//inter();
	groundSetup();
}
document.addEventListener("keydown", function(event) {
	var e2 = event.which || event.keyCode;
	//alert(e2);
    if (e2 == 37) {
        left = "down";
    }
	if (e2 == 39) {
		right = "down";
	}
	if (e2 == 38) {
		heroJump();
	}
})
document.addEventListener("keyup", function(event) {
	var e2 = event.which || event.keyCode;
	if (e2 == 37) {
		left = "up";
	}
	if (e2 == 39) {
		right = "up";
	}
	if (e2 == 38) {
		up = "up";
	}
})

function update() {
	if (stage == 0) {
		ctx.clearRect(0, 0, 600, 600);
		createOptions();
		drawBlocks();
		sketchRect();
	}
	if (stage == 1) {
		heroLR();
		heroFall();
		heroOrb();
		ctx.clearRect(0, 0, 600, 600);
		drawBlocks();
		drawHero();
		drawOrbs();
		showColors();
	}

}

setInterval(update, 25);



function reset(add) {
	hero.cx = currentHorizontal[0].xcor + 30;
	hero.cy = currentHorizontal[0].ycor - 20;
	unlocked = JSON.parse(JSON.stringify(unlockedc));
	for (var i = 0; i < orbs.length; i++) {
		orbs[i].vis = true;
	}
}
