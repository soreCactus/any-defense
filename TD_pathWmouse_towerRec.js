
//place towers before round, then wave comes. in between waves, can move/add towers

var x, y, i, gridx, gridy, namer, a, b, towerType;
var capture;
var capImage;
var towerColor;
var color;
var resX = 640;
var resY = 400;
var timer = 0;
var maxDistance = 2; //the distance between each point in the path
var frmRate = 20;
var setupMode = -3; //-3: tower color-2: place start, -1: place base, 0: drawing path, 1: filling in path, 2: place towers, 3: game in progress
var pathX = [0];
var pathY = [0];
var grid = new Array(resX/10);
function Enemy(health,color,size,speed) {
    this.alive = true;
    this.xpos = -10;
    this.ypos = 0;
    this.step = 0;
    this.size = size;
    this.speed = speed;
    this.unitHealth = health;
    this.unitColor = color;
    this.go = function() {
        if(this.alive) {
            this.step += this.speed;
            this.xpos = pathX[this.step];
            this.ypos = pathY[this.step];
            fill(this.unitColor);
            ellipse(this.xpos,this.ypos,this.size);
            }
    }
    this.hurt = function(damage) {
        this.unitHealth -= damage;
        if (this.unitHealth <= 0) {
            this.xpos = -400;
            this.alive = false;
        }
    }
}
    var grunt1 = new Enemy(5,'green',8,2);
    var grunt2 = new Enemy(5,'green',8,2);
    var grunt3 = new Enemy(5,'green',8,2);
    var grunt4 = new Enemy(5,'green',8,2);
    var grunt5 = new Enemy(5,'green',8,2);
    var grunt6 = new Enemy(5,'green',8,2);
    var grunt7 = new Enemy(5,'green',8,2);
    var grunt8 = new Enemy(5,'green',8,2);
    var grunt9 = new Enemy(5,'green',8,2);
    var grunt10 = new Enemy(5,'green',8,2);
    var grunt11 = new Enemy(5,'green',8,2);
    var grunt12 = new Enemy(5,'green',8,2);
    var grunt13 = new Enemy(5,'green',8,2);
    var grunt14 = new Enemy(5,'green',8,2);
    var grunt15 = new Enemy(5,'green',8,2);
    var grunt16 = new Enemy(5,'green',8,2);
    var grunt17 = new Enemy(5,'green',8,2);
    var grunt18 = new Enemy(5,'green',8,2);
    var grunt19 = new Enemy(5,'green',8,2);
    var grunt20 = new Enemy(5,'green',8,2);
    var grunt21 = new Enemy(5,'green',8,2);
    var grunt22 = new Enemy(5,'green',8,2);
    var grunt23 = new Enemy(5,'green',8,2);
    var grunt24 = new Enemy(5,'green',8,2);
    var grunt25 = new Enemy(5,'green',8,2);
    var grunt26 = new Enemy(5,'green',8,2);
    var grunt27 = new Enemy(5,'green',8,2);
    var grunt28 = new Enemy(5,'green',8,2);
    var grunt29 = new Enemy(5,'green',8,2);
    var grunt30 = new Enemy(5,'green',8,2);
    var grunt31 = new Enemy(5,'green',8,2);
    var grunt32 = new Enemy(5,'green',8,2);
    var grunt33 = new Enemy(5,'green',8,2);
    var bigGrunt34 = new Enemy(12,'green',16,2);
    var bigGrunt35 = new Enemy(12,'green',16,2);
    var grunt36 = new Enemy(5,'green',8,2);
    var grunt37 = new Enemy(5,'green',8,2);
    var grunt38 = new Enemy(5,'green',8,2);
    var grunt39 = new Enemy(5,'green',8,2);
    var grunt40 = new Enemy(5,'green',8,2);
    var boss41 = new Enemy(25,'red',35,1);
    var grunt42 = new Enemy(5,'green',8,2);
    var grunt43 = new Enemy(5,'green',8,2);
    var grunt44 = new Enemy(5,'green',8,2);
    var grunt45 = new Enemy(5,'green',8,2);
    var bigGrunt46 = new Enemy(12,'green',16,2);
    var bigGrunt47 = new Enemy(12,'green',16,2);
    var grunt48 = new Enemy(5,'green',8,2);
    var grunt49 = new Enemy(5,'green',8,2);
    var speedGrunt50 = new Enemy(4,'blue',8,3);
    var speedGrunt51 = new Enemy(4,'blue',8,3);
    var speedGrunt52 = new Enemy(4,'blue',8,3);

    var grunt999 = new Enemy(0,0,0,0);//enemies and stats
var enemies = [
    grunt1,
    grunt2,
    grunt3,
    grunt4,
    grunt5,
    grunt6,
    grunt7,
    grunt8,
    grunt9,
    grunt10,
    grunt11,
    grunt12,
    grunt13,
    grunt14,
    grunt15,
    grunt16,
    grunt17,
    grunt18,
    grunt19,
    grunt20,
    grunt21,
    grunt22,
    grunt23,
    grunt24,
    grunt25,
    grunt26,
    grunt27,
    grunt28,
    grunt29,
    grunt30,
    grunt31,
    grunt32,
    grunt33,
    bigGrunt34,
    bigGrunt35,
    grunt36,
    grunt37,
    grunt38,
    grunt39,
    grunt40,
    boss41,
    grunt42,
    grunt43,
    grunt44,
    grunt45,
    bigGrunt46,
    bigGrunt47,
    grunt48,
    grunt49,
    speedGrunt50,
    speedGrunt51,
    speedGrunt52
];

function Tower(x,y,damage,range,speed) {
    this.xpos = x;
    this.ypos = y;
    this.distance;
    this.canShoot;
    this.farthestInRange = grunt999;
    this.check = function() {
        fill(255, 153, 51)
        rect(x,y,20,20);
        if (timer % speed == 0) { //higher speed = slower
            this.canShoot = false;
            this.farthestInRange = grunt999;
            for(var n = 0; n < enemies.length;n++) {
                a = this.xpos - enemies[n].xpos;
                b = this.ypos - enemies[n].ypos;
                this.distance = Math.sqrt((a * a) + (b * b));
                //print(this.distance);
                if (this.distance < range) {
                    this.canShoot = true;
                    if(enemies[n].step > this.farthestInRange.step) {
                        this.farthestInRange = enemies[n];
                    } 
                }    
            }
            if (this.canShoot) {
                line(this.xpos,this.ypos,this.farthestInRange.xpos,this.farthestInRange.ypos);
                this.farthestInRange.hurt(damage);
            }
        }
    }
}

var towers = [];

function setup() {
    createCanvas(resX,resY);
    for (var n = 0; n < (resX/10); n++) {
        grid[n] = new Array(resY/10).fill(0);  
    }
    capture = createCapture(VIDEO);
    capture.hide();
    getTowerColor();
    print(grid);
   // img = loadImage("plazaMap.png");
    //image(img,0,0);
    frameRate(frmRate);
    i = 0;
    
    
}

function draw() {
    if (setupMode == -3) {
        background(255,255,255);
        capImage = capture.get();
    image(capImage,440,249,300,180);
    color = capImage.get(20,20);
    print(color);
    }
    var l;
    var w;
    print(setupMode);
    if (setupMode == 0) {
        if(mouseIsPressed) {
            l = (mouseX - (mouseX % 10))/10;
            w = (mouseY - (mouseY % 10))/10;
            if (grid[l][w] == 0) {
                grid[l][w] = 1;
                pathX.push(l*10);
                pathY.push(w*10);
                fill(240);
                rect(l*10,w*10,10,10);
            }
            //print(l);
            //print(pathX);
            /*
            pathX.push(mouseX);
            pathY.push(mouseY);
            stroke(50);
            ellipse(pathX[i],pathY[i],5);
            i++;
            */
        } else {
            text("Enter to confirm path",320,440);
        }
    } else if (setupMode == 2) {
        background(0,0,0);
        for (var n = pathX.length;n>-1;n--) {
            fill(240);
            stroke(240);
            ellipse(pathX[n],pathY[n],14);
        }
       
        for(var n = 0; n < towers.length; n++) {
            towers[n].check();
        }
        if (timer > 5) {grunt1.go();}
        if (timer > 20) {grunt2.go();} 
        if (timer > 40) {grunt3.go();}
        if (timer > 60) {grunt4.go();}
        if (timer > 80) {grunt5.go();} 
        if (timer > 100) {grunt6.go();}
        if (timer > 110) {grunt7.go();}
        if (timer > 115) {grunt8.go();} 
        if (timer > 120) {grunt9.go();}
        if (timer > 215) {grunt10.go();}
        if (timer > 200) {grunt11.go();}
        if (timer > 220) {grunt12.go();} 
        if (timer > 225) {grunt13.go();}
        if (timer > 245) {grunt14.go();}
        if (timer > 250) {grunt15.go();} 
        if (timer > 270) {grunt16.go();}
        if (timer > 275) {grunt17.go();}
        if (timer > 295) {grunt18.go();} 
        if (timer > 300) {grunt19.go();}
        if (timer > 450) {grunt20.go();}
        if (timer > 460) {grunt21.go();}
        if (timer > 470) {grunt22.go();} 
        if (timer > 480) {grunt23.go();}
        if (timer > 490) {grunt24.go();}
        if (timer > 500) {grunt25.go();} 
        if (timer > 540) {grunt26.go();}
        if (timer > 545) {grunt27.go();}
        if (timer > 550) {grunt28.go();} 
        if (timer > 555) {grunt29.go();}
        if (timer > 560) {grunt30.go();}
        if (timer > 600) {grunt31.go();}
        if (timer > 650) {grunt32.go();} 
        if (timer > 700) {grunt33.go();}
        if (timer > 710) {bigGrunt34.go();}
        if (timer > 720) {bigGrunt35.go();} 
        if (timer > 725) {grunt36.go();}
        if (timer > 730) {grunt37.go();}
        if (timer > 735) {grunt38.go();} 
        if (timer > 740) {grunt39.go();}
        if (timer > 745) {grunt40.go();}
        if (timer > 880) {boss41.go();}
        if (timer > 920) {grunt42.go();} 
        if (timer > 930) {grunt43.go();}
        if (timer > 940) {grunt44.go();}
        if (timer > 950) {grunt45.go();} 
        if (timer > 960) {bigGrunt46.go();}
        if (timer > 970) {bigGrunt47.go();}
        if (timer > 980) {grunt48.go();} 
        if (timer > 990) {grunt49.go();}
        if (timer > 1000) {speedGrunt50.go();}
        if (timer > 1010) {speedGrunt51.go();}
        if (timer > 1020) {speedGrunt52.go();}
        timer++;    //spawn times
    }
}

function getTowerColor() {
    var colorPoints = [];
    var aveR = 0;
    var aveG = 0;
    var aveB = 0;
    
    capImage = capture.get();
    image(capImage,540,349,100,60);
    
    for (var l = 20;l < 30; l+= 2) {
        for (var w = 20; w < 26; w++) {
            colorPoints.push(capImage.get(l,w));
        }
    }
    for (l = 0; l < 25; l++) {
        aveR += colorPoints[l][0];
    }
    aveR = aveR / 25;
    for (l = 0; l < 25; l++) {
        aveG += colorPoints[l][1];
    }
    aveG = aveG / 25;
    for (l = 0; l < 25; l++) {
        aveB += colorPoints[l][2];
    }
    aveB = aveB / 25;
    towerColor = color(aveR,aveG,aveB);
    print(towerColor);
}

function lookForTowers() {
    
}

function keyPressed() {
    if (setupMode == 0) {
        setupMode = 1;
        i = 0;
        fillInPath();
    } else if (setupMode == 2) {
        if (keyCode == 49) {
            towerType = 1;
        } else if (keyCode == 50) {
            towerType = 2;
        } else if (keyCode == 51) {
            towerType = 3;
        }
    } else if (setupMode == -3) {
        getTowerColor();
    }
}

function mousePressed() {
    if (setupMode == 2) {
        createTower();
    } 
}



function createTower() {
    if (towers.length < 1) {
        tower1 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower1);
    } else if (towers.length < 2) {
        tower2 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower2);
    } else if (towers.length < 3) {
        tower3 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower3);
    } else if (towers.length < 4) {
        tower4 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower4);
    } else if (towers.length < 5) {
        tower5 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower5);
    } else if (towers.length < 6) {
        tower6 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower6);
    } else if (towers.length < 7) {
        tower7 = new Tower(mouseX,mouseY,2,100,20);
        towers.push(tower7);
    }
}

function fillInPath() { //this function adds points in between two drawn points where the distance between them is greater than maxDistance. Because minions move from point to point based on framerate, this ensures they move the same speed throughout the path.
    var pointDistance;
    
    while (i < pathX.length) {
        //print(pathX); 
        //print(pathY);
        a = pathX[i + 1] - pathX[i];
        b = pathY[i + 1] - pathY[i];
        pointDistance = Math.sqrt((a * a) + (b * b));
        if (pointDistance > maxDistance) {
            //print("Adding point");
            //print(pointDistance);
            pathX.splice(i + 1, 0, (pathX[i + 1] - (a/2))); //add a point half way between
            pathY.splice(i + 1, 0, (pathY[i + 1] - (b/2)));
            ellipse(pathX[i + 1],pathY[i + 1],5);
        } else {
            i++;
        }
    }
    i = 0;
    setupMode = 2;
}



function drawGrid() {
    background(0,0,0);
    stroke('white');
    for (gridx = 0;gridx < width; gridx += 10) {
        line(gridx,0,gridx,height);
    }
    for (gridy = 0;gridy < height; gridy += 10) {
        line(0,gridy,width,gridy);
    }
}

