window.onload = function() {
	let firstP = document.querySelector('div > p');
	console.log(firstP.style);
	firstP.style.backgroundColor = 'red';
	firstP.style.color = 'white'

	let allDivPs = document.querySelectorAll('div > p');
	allDivPs[0].style.cssText = 'background-color: green; color: red;';
	let allDivs = document.getElementsByTagName('div > p');
	//allDivs[4].style.cssText = 'background-color: gold; color: white;';
	//allDivs[5].style.cssText = 'background-color: gold; color: white;';
	//console.log(allDivPs[4].classList)
	allDivs[4].classList.add('gold');
	allDivs[5].classList.add('gold');
};