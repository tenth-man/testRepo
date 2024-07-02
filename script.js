let container = document.querySelector('#container');
let box = document.createElement('div');

box.setAttribute('id', 'box');
document.querySelector('#but').onclick = function() {
		container.append(box.cloneNode(true));
		console.log(document.querySelector('#box'));		
};
box.addEventListener('click', function() {
	console.log('box is clicked');
});

