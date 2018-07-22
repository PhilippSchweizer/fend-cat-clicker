// Globals

const catPicture = document.getElementById('cat-pic'),
	countDisplay = document.getElementById('count-display');

let clickCount = countDisplay.innerHTML;



// the event listener functions only when the DOM is ready ...
// document.addEventListener('DOMContentLoaded', function () {
window.onload = function() {

	// finaly the actual cat click listener	
	catPicture.addEventListener('click', function() {
		clickCount ++;
		console.log('You clicked the pic ' + clickCount + ' times.');
		countDisplay.innerHTML = clickCount;
	}, false);

}

