var hero;
function heroStart() {
	ref = currentHorizontal[0];
	hero = {
		col: ref.col,
		cx: ref.xcor + 20,
		cy: ref.ycor - 20,
		len: 10,
		ht: 20,
		jump: 0,
		jcount: 2,
		lives: 3
	}
	//drawHero();
}

function drawHero() {
	ctx.fillStyle = hero.col;
	ctx.fillRect(hero.cx, hero.cy, hero.len, hero.ht);
}

function heroLR() {
	if (right == "down") {
		hero.cx+=5;
		for (var i = 0; i < currentHorizontal.length; i++) {
			if (hero.cx + 10 > currentHorizontal[i].xcor) {
				if (hero.cx < currentHorizontal[i].xcor+currentHorizontal[i].len) {
					if (hero.cy > currentHorizontal[i].ycor) {
						if (hero.cy < currentHorizontal[i].ycor+currentHorizontal[i].ht) {
							hero.cx-=5;
							if (unlocked[currentHorizontal[i].cn] == false) {
								reset();
							}
						}
					}
				}
			}
		}
	}
	else if (left == "down") {
		hero.cx-=5;
		for (var i = 0; i < currentHorizontal.length; i++) {
			if (hero.cx + 10 > currentHorizontal[i].xcor) {
				if (hero.cx < currentHorizontal[i].xcor+currentHorizontal[i].len) {
					if (hero.cy > currentHorizontal[i].ycor) {
						if (hero.cy < currentHorizontal[i].ycor+currentHorizontal[i].ht) {
							hero.cx+=5;
							if (unlocked[currentHorizontal[i].cn] == false) {
								reset();
							}
						}
					}
				}
			}
		}
	}
	else {
		//alert(hero.cx);
	}
	//update();
}

function heroFall() {
	var drop = false;
	if (hero.jump > 0) {
		hero.cy-= 20;
		hero.jump -= 1;
		drop = true;
	}
	var shouldFall = true;
	for (var i = 0; i < currentHorizontal.length; i++) {
		if (hero.cx + 5 >= currentHorizontal[i].xcor  && hero.cx + 5 <= currentHorizontal[i].xcor + currentHorizontal[i].len) {
			//alert("test");
			if (hero.cy + 20 >= currentHorizontal[i].ycor  && hero.cy + 20 <= currentHorizontal[i].ycor + currentHorizontal[i].ht) {
				shouldFall = false;
				hero.cy = currentHorizontal[i].ycor-20;

				if (drop) {
					hero.cy+=30;
					hero.jump = 0;
				}
				else {
					hero.jcount = 2;
					//hero.jcan = true;
				}
				if (unlocked[currentHorizontal[i].cn]==false) {
					reset(0);
				}
			}
		}
	}
	if (shouldFall) {
		hero.cy+=10;
	}
	if (hero.cy > 600) {
		//When the hero dies
		reset(0);
	}
}

function heroJump() {
	if (hero.jcount > 0 && hero.jump == 0 && up == "up") {
		up = "down";
		hero.jump = 10;
		hero.jcount-=1;
		//hero.jcan=false;
	}
}

 function heroOrb() {
 	for (var i = 0; i < orbs.length; i++) {
 		if (hero.cx > orbs[i].xc -10 && hero.cx < orbs[i].xc + 10 && hero.cy > orbs[i].yc -10 && hero.cy < orbs[i].yc + 10 ) {
 			orbs[i].vis = false;
			unlocked[orbs[i].cn] = true;
 		}
 	}
 }
