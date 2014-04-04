var scrollTotal = 1000;
var scrolled = 0; // A variable to keep track of how far we've scrolled.
var fractionScrolled = scrolled / scrollTotal;

// You can read more about the mosuewheel event at https://developer.mozilla.org/en-US/docs/DOM/DOM_event_reference/mousewheel
if (document.addEventListener) {
	document.addEventListener("mousewheel", MouseWheelHandler, false);
}


var waypoints = document.getElementsByClassName('waypoint');
for (var i = 0; i < waypoints.length; i++) {
	// Here we attach a handler to the click event for every waypoint,
	// https://developer.mozilla.org/en-US/docs/Web/Reference/Events/click
	waypoints[i].addEventListener("click", waypointClickHandler, false);
}

var listElements = document.querySelectorAll('nav li div.waypoint');
for (var i = 0; i < listElements.length; i++){
	listElements[i].addEventListener("mouseover", showHoverText, false);
	listElements[i].addEventListener("mouseout", hideHoverText, false);
}

function showHoverText(e){
	var currentHoveredWaypoint = event.target;
	console.log(currentHoveredWaypoint);

	currentHoveredWaypoint.parentNode.getElementsByClassName('hover-text')[0].classList.add('active-hover-text');

}

function hideHoverText(e){	
	var currentBlock = document.getElementsByClassName('active-hover-text')[0];
	currentBlock.classList.remove('active-hover-text');
	
}

function updateWaypoints() {
	fractionScrolled = scrolled / scrollTotal;

	// 0 <= fractionScrolled <= 1, so *10 gives us 10; Math.floor rounds down
	var whichWaypoint = Math.max(0, Math.floor(fractionScrolled * 10));

	for (i = 0; i < 10; i++) {
		// Notice we constructed our li#id names to make this easy
		var currentWaypoint = document.getElementById('waypoint-' + i);
		
		if ( i == whichWaypoint ) {
			currentWaypoint.classList.add('active-waypoint');
			showClickText(i);
		}
		
		else {
			currentWaypoint.classList.remove('active-waypoint');
			hideCLickText();
		}
	}

	// Seek to the proportional time of the 38s clip of Bey's "Countdown"
	document.getElementById('Raven').currentTime = fractionScrolled * 38.0;
}
function showClickText(i){
	var currentClickText = document.getElementById('hover-text-' + i);
	currentClickText.classList.add('active-hover-text');
}

function hideCLickText(){
	var currentClickText = document.getElementById('hover-text-' + i);
		currentClickText.classList.remove('active-hover-text');
}

function waypointClickHandler(e) {
	console.log('click');
	for (i = 0; i < waypoints.length; i++) {
		if (waypoints[i] === this) {
			scrolled = (i)*100;
			document.getElementsByTagName('header')[0].innerHTML = scrolled;
			updateWaypoints();
			console.log(scrolled);
		}
	}
    
	// changes colors of side blocks on clicks
	// reverts back to orginal black when other waypoint is clicked
    if ( scrolled > 0 && scrolled < 250  ) {
		document.getElementById('one').style.backgroundColor = '#777777';
	} else {
		document.getElementById('one').style.backgroundColor = '#000';
	}
	
	if ( scrolled >= 250 && scrolled < 500) {
		document.getElementById('two').style.backgroundColor = '#777777';
	}
	else {
		document.getElementById('two').style.backgroundColor = '#000';
	}
	
	if ( scrolled >= 500 && scrolled < 750) {
		document.getElementById('three').style.backgroundColor = '#777777';
	}
	else {
		document.getElementById('three').style.backgroundColor = '#000';
	}
	
	if ( scrolled >= 750) {
		document.getElementById('four').style.backgroundColor = '#777777';
	}
	else {
		document.getElementById('four').style.backgroundColor = '#000';
	}
}


function MouseWheelHandler(e) {
	// This function is called every time there's a mousewheelevent

	var rawScrolled = Math.max(-1, Math.min(1, e.wheelDelta));
	scrolled = Math.min(Math.max(0, scrolled - rawScrolled), scrollTotal);

	document.getElementsByTagName('header')[0].innerHTML = "Project 1";

	//allows for aside changes when there is a MouseWheel event
	//currently only changes color. Will play with images next
	if ( scrolled > 0 && scrolled < 250  ) {
		document.getElementById('one').style.backgroundColor = '#777777';
		document.getElementsByTagName('header')[0].innerHTML = scrolled;
	} else {
		document.getElementById('one').style.backgroundColor = '#000';
	}
	
	if ( scrolled >= 250 && scrolled < 500) {
		document.getElementById('two').style.backgroundColor = '#777777';
		document.getElementsByTagName('header')[0].innerHTML = scrolled;
	}
	else {
		document.getElementById('two').style.backgroundColor = '#000';
	}
	
	if ( scrolled >= 500 && scrolled < 750) {
		document.getElementById('three').style.backgroundColor = '#777777';
		document.getElementsByTagName('header')[0].innerHTML = scrolled;
	}
	else {
		document.getElementById('three').style.backgroundColor = '#000';

	}
	
	if ( scrolled >= 750) {
		document.getElementById('four').style.backgroundColor = '#777777';
		document.getElementsByTagName('header')[0].innerHTML = scrolled;
	}
	else {
		document.getElementById('four').style.backgroundColor = '#000';
	}
	
	updateWaypoints();
}

