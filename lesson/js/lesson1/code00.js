/*written by hiro2021*/
document.write("<br>code00、Htmlに定義がない文書の出力<br>");
document.write("<br>定義のない文書はどこにでるのか確かめています。");
document.write("<br>lesson1の最後のdivの後に出力さています。");//開発の要素で、確認できます。
document.write("<br>文章の中に大きくスペースを明けるようにenterキーで改行するとエラーになります。長い文書を記入するには、enterキーをいれないで書きます。文書が長いときは、VScodeの折り返し設定を入れておくと良いと思います。VScodeの設定でeditor:wordWrap をonにします。");
document.write("<br><br>HTMLタグpで記入することもありますが、今回はJavascriptの練習で定義のない場合で書いています。            半角のスペースは抜けてスペースができません。");
document.write("<br>半角スペースで\ \ \n \n \n \ \ バックスラッシュをいれてもだめなのですが、全角のスペースは　　　　　　　文字のスペースを確保されます。");

// LessonコメントをHTMLのｐタグに追記しています
var coment = document.getElementById('coment');
var com1 = ["<br>code01で、promptボックスとalertボックスとconfirmボックスを練習します。"];
var com2 = ["<br>code02で、switch/caseとif/elseを使い、論理演算を練習します。"];
var com3 = ["<br>code03で、小数点以下切捨てMath.floor()と乱数Math.random()を使う。whileとifを使い累積加算を練習します。"];
var com4 = ["<br>code04で、forを使いインクリマントを練習します。"];
var com5 = ["<br>code05で、関数を練習します。"];
var com6 = ["<br>code06で、オブジェクトを練習します。"];
var com7 = ["<br>"];
var com8 = ["<br>"];
var com9 = ["<br>code09は練習問題です。力試しです。もくもく会の時に発表して下さい！"];
var com0 = ["lesson1.htmlのscript内のcode**.jsの番号を変更して動かします。<br>"];
coment.innerHTML = [com0 + com1 + com2 + com3 + com4 + com5 + com6 + com7 + com8 + com9];

