function anotherMsg {
	alert('I say the mouse curser has entered the first div!');
}
window.onload = function() {
	let bodyEM = document.querySelector('body');
	bodyEM.addEventListener('click', function() {
			// Callback function
			alert('Body is clicked!');
		});
	let firstDiv = document.querySelector('div');
	//firstDiv.addEventListener('mouseenter', anotherMsg());
	//let button = document.querySelector('button');
	let changeButton = document.getElementById('changeDiv1');
	changeButton.addEventListener('click', function() {
		firstDiv.style.backgroundColor ='red';
	});
	let changeResetButton = document.getElementById('changeResetDiv1');
	changeResetButton.addEventListener('click', function() {
		firstDiv.classList.toggle('gold');
	});	
};