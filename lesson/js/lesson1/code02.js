/*written by hiro2021*/
document.write("code02の練習");
document.write(
  "<br>➀　switch/caseを使う。<br>②　if/elseを使う。<br>③　論理演算をして某駅への列車を選択する。"
);
/*
 */
// station変数に入力結果を格納
let station = prompt(
  "1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください"
);
// promptから得た値は文字列となるので、後の処理のために数値に変換しておく
station = Number(station);
// その駅に停まる電車の種類を格納する変数
let type;
switch (station) {
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
    // 選択肢以外のものを入力した場合はエラー文を表示
    alert("駅が正しく入力されていません。このページを再度読み込んでください。");
}
// 入力された値が正しければメッセージを出力
if (station >= 1 && station <= 3) {
	alert("その駅には" + type + "の電車が停まります");

	let height = 90;
	let ticket = "premium";
	if (height >= 100) {
	  alert("乗車可能");
	} else if (ticket === "premium") {
	  alert("プレミアムシートに乗車可能");
	} else if (height >= 90) {
	  alert("付き添いありで乗車可能");
	} else {
	  alert("乗車不可");
	}
}
 
