// JavaScript Document

document.onscroll = function() {headertransition()}
function headertransition() {
var header = document.getElementById('header')
header.setAttribute("class", "headertransition")
}

//look
// Initial state
//var scrollPos = 0;
// adding scroll event
//window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
//  if ((document.body.getBoundingClientRect()).top > scrollPos)
//		document.getElementById('info-box').setAttribute('data-scroll-direction', 'UP');
//	else
//		document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
	// saves the new position for iteration.
//	scrollPos = (document.body.getBoundingClientRect()).top;
//});