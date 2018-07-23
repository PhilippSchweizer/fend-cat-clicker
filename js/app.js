// Globals

const catPictureOne = document.getElementById('pic-one'),
	catPictureTwo = document.getElementById('pic-two'),
	countDisplayOne = document.getElementById('count-display-01'),
	countDisplayTwo = document.getElementById('count-display-02'),
	catOne = document.getElementById('cat-one'),
	catTwo = document.getElementById('cat-two');

let clickCountOne = countDisplayOne.innerHTML,
	clickCountTwo = countDisplayTwo.innerHTML;



// the event listener functions only when the DOM is ready ...
// document.addEventListener('DOMContentLoaded', function () {
window.onload = function() {

	catOne.innerHTML = "<a href='https://youtu.be/1yskotqNuXI'>RIN</a>";
	catTwo.innerHTML = "<a href='https://youtu.be/r-Nw7HbaeWY'>M.I.A.</a>"

	// finaly the actual cat click listener	
	catPictureOne.addEventListener('click', function() {
		clickCountOne ++;
		console.log('You clicked the pic ' + clickCountOne + ' times.');
		countDisplayOne.innerHTML = clickCountOne;
	}, false);

	// and the secon listener
	catPictureTwo.addEventListener('click', function() {
		clickCountTwo ++;
		console.log('You clicked the pic ' + clickCountTwo + ' times.');
		countDisplayTwo.innerHTML = clickCountTwo;
	}, false);
}

