// JavaScript Document

function headertransition() {
var header = document.getElementById('header')
header.setAttribute("class", "headertransition");
document.getElementById('sign-up').setAttribute("class", 'sign-up-transition')
}

function rmheadertransition() {
var header = document.getElementById('header')
header.removeAttribute('class', 'headertransition');
document.getElementById('sign-up').removeAttribute("class", 'sign-up-transition');
}

document.body.addEventListener('scroll', function(){
if (document.getElementById('container-1').getBoundingClientRect().y > -210){rmheadertransition(); flexFont();}else{headertransition();flexFont();}
})

// imported
flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight*0.30;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

window.onload = function(event) {
    flexFont();
};