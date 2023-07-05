
// ステップごとの着せ替え状態を配列で管理する。
dress_step = [
	{ value:  20, img_name: 'rika.png', checked: true  },
	{ value:  40, img_name: 'rika12.png', checked: false },
	{ value:  60, img_name: 'rika13.png', checked: false },
	{ value:  80, img_name: 'rika15.png', checked: false },
	{ value: 100, img_name: 'rika16.png', checked: false },
	{ value: 120, img_name: 'rika17.png', checked: false },
];

function tasizan() {
	text01 = document.getElementById('atai1');
	text02 = document.getElementById('atai2');

	x = parseInt(text01.value);
	y = parseInt(text02.value);

	z = x + y;
	
	kekka = document.getElementById('kekka');
	kekka.innerHTML = z;
	kekka.style.color ='red';

	// 配列dress_stepの要素を一つずつ取り出して処理する。
	for (ds of dress_step) {
		if (ds.checked == false) {
			ds.checked = true;
			console.log(`z= ${z}, ds.value= ${ds.value}`);

			// 画像の切り替え
			let img_name = ds.img_name;
			console.log(`z= ${z}, ds.value= ${ds.value}`);
			if (z != ds.value) {
				kekka.style.color = 'green';
				img_name = 'rika.png';

				// 計算結果を間違えたので着せ替え状態を最初の状態に戻す。
				for (ds of dress_step) {
					ds.checked = false;
				}
				dress_step[0].checked = true;
			}

			const canvas = document.createElement('canvas')
			const ctx =canvas.getContext('2d');

			canvas.width = 250;
			canvas.height = 420;

			const img = new Image();
			img.src = img_name;

			//画像をcanvasに設定
			img.onload = function(){
				ctx.drawImage(img, 0, 0, 250, 420);

				canvas.setAttribute('style' , 'display:block;margin:auto');
				document.body.appendChild(canvas);
			}

			break;
		}
	}
}

// ToDo: 引き算の処理についても、tasizan()と同じ形でコードを整理できるはず。
//       加えて、tasizan()とhikizan()の違いは、足し算・引き算の部分のみであるため、
//       この二つの関数をひとつにまとめてしまうことも可能。
function hikizan() {
	text03 = document.getElementById('atai3');
	text04 = document.getElementById('atai4');

	a = parseInt(text03.value);
	b = parseInt(text04.value);

	z = a - b;

	kekka2 = document.getElementById('kekka2');
	kekka2.innerHTML = z;
	kekka2.style.color ='green';

	a = z== 40;
	b = z==60;
	c = z==80;
	d = z==100;

if (d) {
	kekka2.style.color ='red';
	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;


	const img = new Image();
	img.src = "rika16.png";

	//画像をcanvasに設定
	img.onload = function(){
	ctx.drawImage(img, 0, 0, 250, 420);


	canvas.setAttribute('style' , 'display:block;margin:auto');
	document.body.appendChild(canvas);
	}
}

if (c) {
	kekka2.style.color ='red';
	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;


	const img = new Image();
	img.src = "rika15.png";

	//画像をcanvasに設定
	img.onload = function(){
	ctx.drawImage(img, 0, 0, 250, 420);


	canvas.setAttribute('style' , 'display:block;margin:auto');
	document.body.appendChild(canvas);
	}
}

if (b) {
	kekka2.style.color = 'red';
	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;

	const img = new Image();
	img.src = "rika13.png";

	//画像をcanvasに設定
	img.onload = function(){
	ctx.drawImage(img, 0, 0, 250, 420);

	canvas.setAttribute('style' , 'display:block;margin:auto');
	document.body.appendChild(canvas);
	}
}

if (a) {
	kekka2.style.color ='red';
	const canvas = document.createElement('canvas')
	const ctx =canvas.getContext('2d');

	canvas.width = 250;
	canvas.height = 420;


	const img = new Image();
	img.src = "rika12.png";

	//画像をcanvasに設定
	img.onload = function(){
	ctx.drawImage(img, 0, 0, 250, 420);


	canvas.setAttribute('style' , 'display:block;margin:auto');
	document.body.appendChild(canvas);
	}
}

if (z == 20) {
	kekka2.style.color = 'red';
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

	// ステップごとの着せ替え状態を初期化する。
	for (ds of dress_step) {
		ds.checked = false;
	}
	dress_step[0].checked = true;
}
