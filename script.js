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

function infopagesTransition() {
	document.getElementsByClassName('infopagesInnerContainer')[0].style.opacity=1;
	console.log('infopagesTransition runned')
}

function signUpPopUp() {
	setTimeout(function() {
		document.getElementById('signUpPopUpBG').style.opacity = '1';
		document.getElementById('signUpPopUp').style.opacity = '1';
		},200)
	document.getElementById('signUpPopUp').style.display = 'flex';
	document.getElementById('signUpPopUpBG').style.display = 'flex';
}

function rmsignUpPopUp() {
	setTimeout(function() {
		document.getElementById('signUpPopUp').style.display = 'none';
		document.getElementById('signUpPopUpBG').style.display = 'none';
		},200)
	document.getElementById('signUpPopUpBG').style.opacity = '0';
	document.getElementById('signUpPopUp').style.opacity = '0';
}

function contactPopUp() {
	setTimeout(function() {
		document.getElementById('contactPopUpBG').style.opacity = '1';
		document.getElementById('contactPopUp').style.opacity = '1';
		},200)
	document.getElementById('contactPopUp').style.display = 'flex';
	document.getElementById('contactPopUpBG').style.display = 'flex';
}

function rmcontactPopUp() {
	setTimeout(function() {
		document.getElementById('contactPopUp').style.display = 'none';
		document.getElementById('contactPopUpBG').style.display = 'none';
		},200)
	document.getElementById('contactPopUpBG').style.opacity = '0';
	document.getElementById('contactPopUp').style.opacity = '0';
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
	infopagesTransition();
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