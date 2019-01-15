// JavaScript Document

function headertransition() {
var header = document.getElementById('header')
header.setAttribute("class", "headertransition")
}

function rmheadertransition() {
var header = document.getElementById('header')
header.removeAttribute('class', 'headertransition')	
}

window.addEventListener('scroll', function(){
if (document.body.getBoundingClientRect().y == 0){rmheadertransition()}else{headertransition();}
})