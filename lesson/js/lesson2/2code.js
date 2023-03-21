// メソッドを使い追加します。appendChild　削除は　removeChild

// LessonコメントをHTMLのｐタグを生成して追記しています
var coment = document.createElement('P');
var com1 = ["2code03で、DOM操作とタイマーイベント、他を練習します。"];
var com2 = ["<br>チャット風javascriptを作って、コメントを入れてstartをクリックすると黒字でチャット送信します。"];
// テキストを設定 innerHTMLプロパティ―を使う。
coment.innerHTML = [com1 + com2];
// 追加対象となる要素を取得
var comentWindow = document.getElementById("Lesson-coment");
// appendChild()メソッドで要素とテキストをHTMLに追加
comentWindow.appendChild(coment);

/* チャットする　JavaScript プログラムです　*/
var answer = ["なるほど！", "ふむふむ", "うーん", "(笑)", "あらら・・・"];

// メッセージ送信処理　引数：送信したいメッセージ(文字列)
function addChatText(val, type) {
  if(!val) return false;

  // チャットに追加するHTMLのliタグを生成
  var text = document.createElement('li');
  // テキストを設定 innerHTMLプロパティ―を使う。（textContent を使うと単純にテキストとして認識　何が違うか確認）
  text.innerHTML = val;
  // text.textContent = val; 今回は違いがない
  // 赤文字のスタイルを設定（CSSのclass「message-other」を設定）
  if(type == "other"){
    text.classList.add("message-other");
  }
  // 追加対象となる要素を取得
  var chatWindow = document.getElementById("chat-list");
  // appendChild()メソッドで要素とテキストをHTMLに追加
  chatWindow.appendChild(text);
}
// 8秒毎にメッセージを送信
var timer = setInterval(function(){
    // ランダムの整数を設定
    var index = Math.floor(Math.random() * answer.length);
    // ランダムメッセージを表示
    addChatText(answer[index], "other");
  }, 8000);
  
  // 初回のみ1秒後にメッセージを自動送信
  setTimeout(function(){
    addChatText("こんにちは！", "other");
  }, 1000);


// 送信ボタン（start）を押した時にメッセージを送信
document.getElementById("startPB").addEventListener("click", function(){
  var inputText = document.getElementById("chat-input");
  // addChatText関数を入力値とCSSのclass判別文字列を引数として実行
  addChatText(inputText.value,"you");
  // 入力欄を空欄にする
  inputText.value = "";
});
// 終了ボタン(end)を押した時に終りメッセージを送信し止める
document.getElementById("endPB").addEventListener("click", function(){
    // addChatText関数を終了メッセージとCSSのclass判別文字列を引数として実行
    addChatText("チャット終了します","you");
    // インターバルタイマーを停止する
    clearInterval(timer);
    
  });

