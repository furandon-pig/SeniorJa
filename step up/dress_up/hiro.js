
function tasizan() {
	text01 = document.getElementById('atai1');
	text02 = document.getElementById('atai2');

	x = parseInt(text01.value);
	y = parseInt(text02.value);

	z = x + y;
	
	kekka = document.getElementById('kekka');
	kekka.innerHTML = z;
	kekka.style.color ='green';
	drees(z);
}

function hikizan() {
	text03 = document.getElementById('atai3');
	text04 = document.getElementById('atai4');

	a = parseInt(text03.value);
	b = parseInt(text04.value);

	z = a - b;

	kekka2 = document.getElementById('kekka2');
	kekka2.innerHTML = z;
	kekka2.style.color ='green';
	drees(z);
}

function drees(z){
	
	const img = new Image();
	
	switch(z){
		case 20:
			img.src = "rika.png";
		break;
		case 40:
			img.src = "rika12.png";
		break;
		case 60:
			img.src = "rika13.png";
		break;
		case 80:
			img.src = "rika15.png";
		break;
		case 100:
			img.src = "rika16.png";
		break;
		case 120:
			img.src = "rika17.png";
		break;
		default:
			kekka.style.color = 'red';
		break;
	}

	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;	
	//画像をcanvasに設定
	img.onload = function(){
		ctx.drawImage(img, 0, 0, 250, 420);
		canvas.setAttribute('style' , 'display:block;margin:auto');
		document.body.appendChild(canvas);
	}	
}

function clearText() {
	var textForm = document.getElementById("atai1");
	textForm.value = '';
	var textForm = document.getElementById("atai2");
	textForm.value = '';
	var textForm = document.getElementById("atai3");
	textForm.value = '';
	var textForm = document.getElementById("atai4");
	textForm.value = '';
}

function reset() {
 	location.href = "toka.html";
}

function kaishi() {
	kekka.style.color = 'red';

	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;

	const img = new Image();
	img.src = "rika.png";

	//画像をcanvasに設定
	img.onload = function(){
	ctx.drawImage(img, 0, 0, 250, 420);

	canvas.setAttribute('style' , 'display:block;margin:auto');
	document.body.appendChild(canvas);
	}
}