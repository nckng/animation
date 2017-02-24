var c = document.getElementById("slate");
var sb = document.getElementById("stop");
var circle = document.getElementById("circle");
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

var grow = function(){
    var x = 1;
    var grow = true;
    window.cancelAnimationFrame(rid);
    var dot = function(){
	ctx.clearRect(0,0,c.width,c.height);
	if(x == 0 or x == c.width/2){
	    grow = !(grow);
	} 
	ctx.beginPath();
	ctx.arc(c.height/2,c.height/2,x,0,2*Math.PI);
	ctx.stroke();
	if (grow){
	    x++;
	}
	else{
	    x--;
	}
	rid = window.requestAnimationFrame(dot);
    }
    dot();
};

var stopit = function(){
    window.cancelAnimationFrame(rid);
};

circle.addEventListener("click",grow);
slate.addEventListener("click",first);



sb.addEventListener("click", stopit);


