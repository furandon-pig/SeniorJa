var answer = 0

function tasizan() {
	text01 = document.getElementById('atai1');
	text02 = document.getElementById('atai2');

	x = parseInt(text01.value);
	y = parseInt(text02.value);
	z = x + y;
	
	kekka = document.getElementById('kekka');
	kekka.innerHTML = z;
	if (z == answer){
		kekka.style.color ='green';
	}else{
		kekka.style.color ='red';
	}	
	drees(z,1);
}

function hikizan() {
	text03 = document.getElementById('atai3');
	text04 = document.getElementById('atai4');

	a = parseInt(text03.value);
	b = parseInt(text04.value);
	z = a - b;

	kekka2 = document.getElementById('kekka2');
	kekka2.innerHTML = z;
	if (z == answer){
		kekka2.style.color ='green';
	}else{
		kekka2.style.color ='red';
	}
	drees(z,2);
}

function drees(z,m){	
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
			
		break;
	}

	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 750;
	canvas.height = 420;	
	//画像をcanvasに設定
	let x0 = 250 * m;
	console.log(x0,m);

	img.onload = function(){
		ctx.drawImage(img, x0, 0, 250, 420);
		
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
/* キャンパスをクリアできない
	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');
	canvas.width = 750;
	canvas.height = 420;
	ctx.clearRect(0,0,750,420);
	canvas.setAttribute('style' , 'display:block;margin:auto');
		document.body.appendChild(canvas);
*/		
}

function reset() {
 	location.href = "toka.html";
}

function kaishi() {
	answer = Math.floor(Math.random() * 6) * 20 + 20; // 20から120までの20の倍数をランダムに生成
	console.log(answer); // 結果を表示
	drees(answer,0);
}