var orbs = [];
var colors = ["gray" ,"red", "green", "blue", "cyan", "yellow", "magenta"];
var unlocked = [true, false, false, false, false, false, false];
var unlockedc = [true, false, false, false, false, false, false];

function newOrb(c, xcc, ycc) {
	orbs.push({col: colors[c], xc: xcc, yc: ycc, vis:true, cn: c});
}

function drawOrbs() {
	for (var i = 0; i < orbs.length; i++) {
		if (orbs[i].vis) {
			ctx.fillStyle=orbs[i].col;
			ctx.beginPath();
			ctx.arc(orbs[i].xc, orbs[i].yc, 10, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
		}

	}
}

function showColors() {
	for (var i = 0; i < unlocked.length; i++) {
		if (unlocked[i]) {
			ctx.fillStyle = colors[i];
			ctx.fillRect((600/7)*i+17.5, 25, 50, 50);
		}
		else {
			ctx.fillStyle="black";
			ctx.beginPath();
			ctx.rect((600/7)*i+17.5, 25, 50, 50);
			ctx.stroke();
			ctx.closePath();
		}
	}
}
