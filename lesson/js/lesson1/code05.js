/*written by hiro2021*/
document.write("code05の練習");
document.write(
  "<br>➀　３つの関数を作る。<br>②　displayTrainType()電車の種類を表示<br>③　inputStation()駅名を入力<br>④　getTrainType(station)電車の種類を取得<br><br>　呼出し処理の場所はどこにするか確認する。<br>　functionだけだと実行されない。先頭でも、最後でも呼出しを行うと実行できる。<br><br>　どこで呼び出すと良いか好き嫌いがありますが、プログラムは前から読むので、前から順に実行処理が並ぶ方が読み易いプログラムになると思います。関数などは、前に書くのはC言語もそうなんでが、前提条件を述べて記入する方法です。これは、本題がどこにあるのか分かり難いと思いませんか？総論を述べて各論に行く方が、話は分かりやすいですよね。"
);

// 呼び出し元　処理を実行する
displayTrainType();

// 行き先の駅に停まる電車の種類を表示する処理
function displayTrainType() {
    let station = inputStation();
    let type = getTrainType(station);
    // 入力された値が選択肢の範囲内なら正しいメッセージを出力
    if(station >= 1 && station <= 3) {
        alert("その駅には" + type + "の電車が停まります");
    }
    else {
        // 選択肢以外のものを入力した場合は再度入力処理の関数を実行
        displayTrainType();
    }
 }
 
 // 駅名を入力する処理
 function inputStation() {
    let station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください");
    station = Number(station);//文字から数字に変換
    return station;
 }
 
 // その駅に停まる電車の種類を取得する処理
 function getTrainType(station) {
    let type;
    switch(station) {
        case 1:
            type = "快速";
            break;
        case 2:
            type = "快速と急行";
            break;
        case 3:
            type = "特急";
            break;
        default:
            alert("駅が正しく選択されませんでした。もう一度入力してください。");
            break;
    }
    return type;
 }
 
 // 呼び出し元　処理を実行する
 // displayTrainType();