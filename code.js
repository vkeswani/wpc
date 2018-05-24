var muM = 75;
var sdM = 15;
var muF = 60;
var sdF = 12;
var i1 = 0;
function sayHello() {
	var n = document.getElementById("name").value.toUpperCase();
	var message = "<h2>Hello " + n + "!<h2>";
	document.getElementById("content").innerHTML = message;
	$("#custom-select").show();
	
}
function index() {
	var x = document.getElementById("mySelect");
	var i = x.selectedIndex;
	i1 = i;
	$("#percentile").show();
}
function getClosestNum(num, ar)
{
    var i = 0, closest, closestDiff, currentDiff;
    if(ar.length)
    {
        closest = ar[0];
        for(i;i<ar.length;i++)
        {           
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - ar[i]);
            if(currentDiff < closestDiff)
            {
                closest = ar[i];
            }
            closestDiff = null;
            currentDiff = null;
        }
        return ar.indexOf(closest);
    }
    return false;
}
function calPercentile() {
	var w = document.getElementById("weight").value;
	var list = [];
	var z = 0, x = 0, mu, sd;
	if(i1==1) {
		mu=muM;
		sd=sdM; 
	}
	else {
		mu=muF;
		sd=sdF;
	}
	for(var i = 0; i<100000; i++){
		z = Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random());
		x = mu + sd*z;
		list[list.length] = x;
	}
	list = list.sort(function(a, b){return a-b});
	var a = getClosestNum(w, list);
	p = Math.round((a/list.length)*1000000)/10000;
	var message = "<h3>Your weight percentile is<br> *** " + p + " ***<h3?";
	document.getElementById("result").innerHTML = message;
}
$(document).ready(function(){
	$("#custom-select").hide();
	$("#percentile").hide();
	

});