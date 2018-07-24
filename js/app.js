// Globals

const clickerContainer = document.getElementById('cat-clicker'),
	navContainer = document.querySelector('.cat-list'),
	navFragment = document.createDocumentFragment(),
	clickerFragment = document.createDocumentFragment(),
	cats = [
		'RIN',
		'M.I.A.',
		'Childish Gambino',
		'Cardi B',
		'Future'],
	images = [
		'img/pr-rin.jpg',
		'img/pr-m.i.a.jpg',
		'img/pr-childish-gambino.jpg',
		'img/pr-cardi-b.jpg',
		'img/future.jpg'];

// let clickCount = countDisplay.innerHTML;

const h1 = document.createElement('h1');
h1.innerHTML = (`Enter ${cats[0]}, CLICK!!!`);
clickerContainer.appendChild(h1);
const img = document.createElement('img');
img.setAttribute('src', images[0]);
clickerContainer.appendChild(img);

cats.forEach(function(cat) {
	const li = document.createElement('li');
	li.textContent = cat;
	li.addEventListener('click', function(cat) {
		clickerContainer.innerHTML = '';
		const h1 = document.createElement('h1');
		h1.innerHTML = (`Enter ${cat}, CLICK!!!`);
		clickerContainer.appendChild(h1);
		const img = document.createElement('img');
		img.setAttribute('src', images[0]);
		clickerContainer.appendChild(img);
	});

	navFragment.appendChild(li);
});

navContainer.appendChild(navFragment);

// Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));

//     document.body.appendChild(elem);
// };



// images.forEach(function(image) {
//     const img = document.createElement('img');
//     image.setAttribute('src', image);
//     image.setAttribute('alt', 'random kitten picture from the internet');
//     clickerFragment.appendChild(img);
// });

// clickerContainer.appendChild(fragment);


// the event listener functions only when the DOM is ready ...
// document.addEventListener('DOMContentLoaded', function () {
// window.onload = function() {

// 	catOne.innerHTML = "<a href='https://youtu.be/1yskotqNuXI'>RIN</a>";
// 	catTwo.innerHTML = "<a href='https://youtu.be/r-Nw7HbaeWY'>M.I.A.</a>"

// 	// finaly the actual cat click listener	
// 	catPictureOne.addEventListener('click', function() {
// 		clickCountOne ++;
// 		console.log('You clicked the pic ' + clickCountOne + ' times.');
// 		countDisplayOne.innerHTML = clickCountOne;
// 	}, false);

// 	// and the secon listener
// 	catPictureTwo.addEventListener('click', function() {
// 		clickCountTwo ++;
// 		console.log('You clicked the pic ' + clickCountTwo + ' times.');
// 		countDisplayTwo.innerHTML = clickCountTwo;
// 	}, false);
// }

