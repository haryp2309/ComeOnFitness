// JavaScript Document

function headertransition() {
var header = document.getElementById('header')
header.setAttribute("class", "headertransition")
}

function rmheadertransition() {
var header = document.getElementById('header')
header.removeAttribute('class', 'headertransition')	
}

document.body.addEventListener('scroll', function(){
if (document.getElementById('container-1').getBoundingClientRect().y == 0){rmheadertransition()}else{headertransition();}
})