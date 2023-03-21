document.write("code01の練習");
document.write(
  "<br>➀　promptボックスとalertボックスとconfirmボックスを使う。<br>②　while文の２種類を使う。<br>③　constとvarをつかう。<br>④　Mathオブジェクトで8%の消費税を計算する。"
);
/*
 */
const tax = 1.08;
do {
  while (!price) {
    var price = prompt("promptボックス表記\n商品の値段はいくらですか？");
  }
  var result = Math.round(price * tax);
  alert("alertボックス表記\n総額は" + result + "円になります。");
  price = "";
} while (
  !confirm("confirmボックス表記\n再確認\n総額は" + result + "円になります。")
);
