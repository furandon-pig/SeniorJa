/*written by hiro2021*/
// コードアローンさんのタイピングを参考にしています。 
// LessonコメントをHTMLのｐタグを生成して追記しています
var coment = document.getElementById('coment');
var com1 = ["2code04で、DOM操作とキーイベント、配列のMAPを練習します。"];
var com2 = ["<br>タイピング練習用で文字の色と大きさを変更します。"];
coment.innerHTML = [com1 + com2];

// 操作する場所　P　を定義します
var p = document.getElementById('text');

//タイピングする文字列をここで用意しておく
var textLists = [
    'Hello World',
    'This is code-alone App.',
    'How are you?',
    'Hello Hello',
    'Welcome to the JavaScript Dojo!',
    'Lets play together!',
    'Programming is deep.',
    'Let it be',
    'Lets make an interesting work',
    'Take a break'
];
var checkTexts = [];//言葉を分解するための配列

createText();

function createText() {
    //文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    
    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    //配列のmapメソッドで、全ての要素に反映できる
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');
        //console.log(value);
        span.textContent = value;
        p.appendChild(span);
        //console.log(span);
        return span;
    });
    console.log(checkTexts);
}
//キーボードイベントを使う。キーが押されると、keDownの関数を処理する
document.addEventListener('keydown', keyDown);

function keyDown(e) {
    console.log(e.key)
    //キーボードからの入力は「e.key」に格納されている
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

        //0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();
        //console.log(!checkTexts.length);
        //配列要素が空っぽになったら次の問題を出す
        if(!checkTexts.length) createText();
    }
}