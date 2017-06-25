var currentHorizontal = []; //Note on the name: this covers horizontal and vertical

function groundSetup() {
	//level1();
	drawBlocks();
	heroStart();
}

function drawBlocks() {
	for (var i = 0; i < currentHorizontal.length; i++) {
		ctx.fillStyle = currentHorizontal[i].col;
		ctx.fillRect(currentHorizontal[i].xcor, currentHorizontal[i].ycor, currentHorizontal[i].len, currentHorizontal[i].ht);
	}
}

function testPlatform() {
	for (var i = 0; i < 5; i++) {
		/*var block = {
			col: "#"+((1<<24)*Math.random()|0).toString(16), //Get random color - courtesy of SO
			xcor: ( i * 120) + 10,
			ycor: 500 - (i * 5),
			len: 70,
			ht: 10,
			vert: false
		}*/
		var block = vertNormal((i*120)+10, 500-(i*5));
		currentHorizontal.push(block);
	}
	currentHorizontal.push(horizNormal(40, 450));
}

function boxHome() {
	currentHorizontal.push(vertNormal(200, 370));
	currentHorizontal.push(vertNormal(200, 300));
	currentHorizontal.push(horizNormal(200, 300));
	currentHorizontal.push(horizNormal(270, 300));
}

function vertNormal(c, xs, ys) {
	return {col: colors[c], xcor: xs, ycor: ys, len: 100, ht: 10, vert: false, cn: c
	}
}

/*function vertNormal(xs, ys) {
	return {col: "#"+((1<<24)*Math.random()|0).toString(16), xcor: xs, ycor: ys, len: 100, ht: 10, vert: false
	}
}*/

function horizNormal(c, xs, ys) {
	return {col: colors[c], xcor: xs, ycor: ys, len: 10, ht: 100, vert: true, cn: c
	}
}

/*function horizNormal(xs, ys) {
	return {col: "#"+((1<<24)*Math.random()|0).toString(16), xcor: xs, ycor: ys, len: 10, ht: 100, vert: true
	}
}*/
