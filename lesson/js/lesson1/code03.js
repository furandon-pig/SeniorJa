/*written by hiro2021*/
document.write("code03の練習");
document.write(
  "<br>➀　小数点以下切捨てMath.floor()と乱数Math.random()を使う。<br>②　whileとifを使う。<br>③　累積加算を行う。<br><br>　マス目５０の双六をします。"
);
/*
 */
// ゴールまでのマス目数を設定
let goal = 50;
// 現在進んでいるマス数
let progress = 0;
// ゴールするまで実行

while (goal > progress) {
  // サイコロの目を1〜6の範囲でランダムに決める
  let result = Math.floor(Math.random() * 6) + 1;
  document.write(
    "<p>" +
      "サイコロの目は" +
      result +
      "です。===>" +
      result +
      "マス進みます" +
      "</p>"
  );
  // マスを進める
  progress += result;
  // 進むマスに止まるかどうか判定するためのランダムな値を出す
  let rand = Math.floor(Math.random() * 4);
  if (rand == 0) {
    // 1~6の間のランダムな数だけ進ませる
    result = Math.floor(Math.random() * 6) + 1;
    // マスを進ませる加算処理
    progress += result;
    console.log(result + "進むマスに止まった！さらに" + result + "マス進む！");
  }
  document.write(
    "<p>" +
      "現在" +
      progress +
      "マスまで進んでいます。あと" +
      (goal - progress) +
      "マスでゴールです" +
      "</p>"
  );
}
// ゴールマスまで進んだら終了
document.write("ゴールしました！");
