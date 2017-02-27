var c = document.getElementById("slate");
var sb = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("DVD");
var ctx = c.getContext('2d');
var rid;

var first = function(){
    var x = 25;
    window.cancelAnimationFrame(rid);
    var dot = function(){
	ctx.clearRect(0,0,c.width,c.height);
	//console.log(rid);
	ctx.beginPath();
	ctx.arc(x,c.height/2,10,0,2*Math.PI);
	x++;
	ctx.stroke();
	rid = window.requestAnimationFrame(dot);
    };
    dot();
};

var an = function(){
    var r = 1;
    var growing = true;
    window.cancelAnimationFrame(rid);
    var change = function(){
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.moveTo(c.width/2,c.height/2);
	ctx.arc(c.width/2,c.height/2,r,0,2*Math.PI);
	ctx.fill();
	rid = window.requestAnimationFrame(change);
	if (r == 0 || r == c.height/2){
	    growing = !growing;
	};
	if (growing){
	    r++;
	}
	else{
	    r--;
	}
    };
    change();
};

var na = function(){
    var x = Math.floor((Math.random()*(c.height-225))+1);
    var y = Math.floor((Math.random()*(c.height-225))+1);
    var xv = 1;
    var yv = 1;
    window.cancelAnimationFrame(rid);
    var image = new Image();
    image.src = "download.png";
    var change = function(){
	ctx.clearRect(0,0,c.width, c.height);
	ctx.drawImage(image, x,y);
	if (x == 0 || x == c.height-225){
	    xv = -1*xv;  
	};
	if (y == -60 || y == c.height-165){
	    yv = -1*yv;
	};
	x += xv;
	y += yv;
	rid = window.requestAnimationFrame(change);
    };
    change();
};


var stopit = function(){
    window.cancelAnimationFrame(rid);
};

circle.addEventListener("click",an);

dvd.addEventListener("click",na);


slate.addEventListener("click",first);



sb.addEventListener("click", stopit);


