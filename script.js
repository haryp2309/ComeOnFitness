// JavaScript Document

function headertransition() {
var header = document.getElementById('header');
header.setAttribute("class", "headertransition");
document.getElementById('sign-up').setAttribute("class", 'sign-up-transition');
var headertitle = document.getElementById('headertitle')
headertitle.setAttribute("class", "headertransition");
	console.log('headertransition runned');
}

function rmheadertransition() {
var header = document.getElementById('header')
header.removeAttribute('class', 'headertransition');
document.getElementById('sign-up').removeAttribute("class", 'sign-up-transition');
var headertitle = document.getElementById('headertitle')
headertitle.removeAttribute("class", "headertransition");
	console.log('rmheadertransition runned');
}

function headerResize() {
	var actualInnerWidth = document.body.clientWidth;
	var header = document.getElementById('header');
	header.style.width=actualInnerWidth+'px';
	//console.log('headerResize runned');
}


document.body.addEventListener('scroll', function(){
if (document.getElementById('container-1').getBoundingClientRect().y > -210){rmheadertransition();}else{headertransition();console.log('scrolled')}
})

function flexFont() {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight;
        divs[i].style.fontSize = relFontsize*0.004+'em';
		console.log('flexFont runned');
    }}

window.onload = function(event) {
    flexFont();
	headerResize();
};


var c = document.getElementById("scrollArrow");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(300, 20);
ctx.lineTo(500, 150);
ctx.lineTo(700, 20);
//line 2
ctx.moveTo(300, 120);
ctx.lineTo(500, 250);
ctx.lineTo(700, 120);
ctx.strokeStyle = "white";
ctx.lineWidth = 8;
ctx.stroke();