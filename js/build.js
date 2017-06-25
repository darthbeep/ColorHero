var ccolor = "gray";
var ccn = 0;
var cshape = "rect";
var rectCoords = [0, 0, 0, 0]

function startBuild() {
	createOptions();
}

function createOptions() {
	for (var i = 0; i < 7; i++) {
		ctx.fillStyle=colors[i];
		ctx.fillRect((600/7)*i+17.5, 25, 50, 50);
	}
	ctx.fillStyle=ccolor;
	ctx.beginPath();
	ctx.rect(50, 500, 50, 50);
	ctx.arc(525, 525, 25, 0, 2*Math.PI);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.rect(250, 500, 100, 50);
	ctx.stroke();
	ctx.closePath();

	ctx.font="40px Georgia";
	ctx.fillText("start", 260, 535);
}

document.addEventListener("click", selectColor);
document.addEventListener("mousedown", finalRect);
document.addEventListener("mouseup", placeThing);

function selectColor(event) {
	var ca = document.getElementById('game');
	var rect = ca.getBoundingClientRect();
	xuse = (event.clientX-rect.left)/(rect.right-rect.left)*ca.width;
	yuse = (event.clientY-rect.top)/(rect.bottom-rect.top)*ca.height;
	var drawingNow = true;
	for (var i = 0; i < 7; i++) {
		if (xuse > (600/7)*i+17.5 && xuse < (600/7)*i+67.5 && yuse > 25 && yuse < 75) {
			ccolor = colors[i];
			ccn = i;
			drawingNow = false;
		}
	}
	if (xuse > 50 && xuse < 100 && yuse > 500 && yuse < 550) {
		cshape = "rect";
		drawingNow = false;
	}
	if ( ( (xuse - 525) * (xuse - 525) ) + ( (yuse - 525) * (yuse - 525) ) < 625 ) {
		cshape = "arc";
		drawingNow=false;
	}

	if (xuse > 250 && xuse < 350 && yuse > 500 && yuse < 550) {
		start();
		drawingNow = false;
	}
	if (drawingNow) {
		//rectCoords[0] = xuse;
		//rectCoords[1] = yuse;
		//console.log(rectCoords[0]);
	}
	//alert(event.x);
}

function finalRect(event) {
	var ca = document.getElementById('game');
	var rect = ca.getBoundingClientRect();
	if (rectCoords[0] <= 0 && rectCoords[1] <= 0) {
		rectCoords[0] = (event.clientX-rect.left)/(rect.right-rect.left)*ca.width;
		rectCoords[1] = (event.clientY-rect.top)/(rect.bottom-rect.top)*ca.height;
	}
	rectCoords[2] = (event.clientX-rect.left)/(rect.right-rect.left)*ca.width;
	rectCoords[3] = (event.clientY-rect.top)/(rect.bottom-rect.top)*ca.height;
	//console.log(rectCoords);
}

function sketchRect() {
	if (cshape == "rect") {
		if (rectCoords[2] > 0 && rectCoords[3] > 0 && rectCoords[0] > 0 && rectCoords[1] > 0) {
			if (rectCoords[2] < 600 && rectCoords[3] < 600 && rectCoords[0] < 600 && rectCoords[1] < 600) {
				ctx.fillStyle = ccolor;
				ctx.fillRect(rectCoords[0], rectCoords[1], getMouseX()-rectCoords[0], getMouseY()-rectCoords[1]);
			}
		}
	}
}

var mx = null;
var my = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    mx = e.pageX;
    my = e.pageY;
}

function getMouseX() {
    return mx;
}

function getMouseY() {
    return my;
}

function placeThing(event) {
	if (Math.abs(getMouseX() - rectCoords[0]) > 10 && Math.abs(getMouseY() - rectCoords[1]) > 5) {
		xp = Math.min(rectCoords[0], getMouseX());
		yp = Math.min(rectCoords[1], getMouseY());
		lp = Math.abs(getMouseX() - rectCoords[0]);
		hp = Math.abs(getMouseY() - rectCoords[1]);
		currentHorizontal.push({col: ccolor, xcor: xp, ycor: yp, len: lp, ht: hp, cn:ccn});
	}

	rectCoords[0] = 0;
	rectCoords[1] = 0;
}
