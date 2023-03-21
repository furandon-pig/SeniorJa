document.write("2code02で、DOM操作とclickイベントを練習をします。<br><br>");
document.write("「今日の天気」をh1で、その下に「晴れ」をddで　次に「いいお天気ですね」をpで　追加します。");
document.write("「start」を押すと「いいね\！」が追加されます。");

/* メソッドを使い追加します。appendChild　　　削除は　removeChild
*/
var element = document.createElement("h1");
var text = document.createTextNode("今日の天気");
document.body.appendChild(element).appendChild(text);

var element = document.createElement("dd");
var text = document.createTextNode("晴れ");
element.style.color = "#ff7c89";
element.style.fontSize = "20px";
document.body.appendChild(element).appendChild(text);

var element = document.createElement("p");
var text = document.createTextNode("いいお天気ですね\n");
document.body.appendChild(element).appendChild(text);
element.style.color = "#00ff00";

const PB=document.getElementById("startPB");

PB.onclick = function(){
    console.log("PBON");
    /*var element = document.createElement("p");*/
    var text = document.createTextNode("いいね！\n");
    document.body.appendChild(element).appendChild(text);
    
};


