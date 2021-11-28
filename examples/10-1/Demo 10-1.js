function changeDivCSS() {
	let buttonId = this.id;
	let divs = document.getElementsByTagName('div');
	if(buttonId === 'changeDiv1') {
		divs[0].style.cssText = 'background-color: red; width: 100px; height: 40px';
	}
	else if(buttonId === 'changeDiv2') {
		divs[1].style.cssText = 'background-color: black; width: 60px; height: 150px';
	}
	else {
		divs[2].style.cssText = 'background-color: gold; width: 200px; height: 200px';
	}
};

window.onload = function () {
	if (false) {
		//alert ('True!');
	}
	else {
		//alert ('False!');
	}
	// Real conditions
	if(1 === l) {
		//alert('True!');
	}
	else {
		//alert('False!');
	}

	// !== means 'not equivalent to'
	if (1 !== 2) {
		//alert('True!');
	}

	// Multiplle separated conditions
	if (2 === '2') {
		//alert('Condition 1 is true!');
	}
	else if('a' === 'b') {
		//alert('Condition 2 is true!');
	}
	else {
		//alert('Neither is true QQ.');
	}

	//AND vs. OR in the same line
	if (2 === 2 && 15 === 10) { // && means AND
		//alert('Condition 1 is true!');
	} 
	else if(2 !== 2 || 15 === 10) { // || means OR
		//alert('Condition 2 is true!');
	}
	else {
		//alert('Neither is true.');
	}

	document.getElementById('changeDiv1').addEventListener('click', changeDivCSS);
	document.getElementById('changeDiv2').addEventListener('click', changeDivCSS);
	document.getElementById('changeDiv3').addEventListener('click', changeDivCSS);
};