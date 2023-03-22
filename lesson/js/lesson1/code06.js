/*written by hiro2021*/
document.write("code06の練習<br>");
document.write(
  "<br>➀オブジェクトの練習をする。<br>　　自分で定義するオブジェクト【student】を定義　区切り記号は,を使う<br>②開発ツールのコンソールログを表示する。"
);
/*オブジェクト例
自分で定義するタイプ　student
document.write(<p>オブジェクトの練習をします</p>);
JabaScriptで用意してあるもの window,math,date
*/
let student = {
  gender: "female",
  age: 20,
  major: "シニアもくもく会",
  lessons: function (theme) {
    document.write(
      "<p>" + this.major + "の" + theme + "部屋を受講中の参加者です。" + "<p>"
    );
  },
};
student.lessons("JavaScript");

document.write(
  "開発ツールのconsole.logに以下のものを出力<br>　wndow.outerWidth<br>　Math.PI<br>　Math.round<br>　Date<br>開発ツールは、ホームページ画面を右クリックし選ぶ。edgeもchromeも同様な操作になった。"
);
console.log(window.outerWidth);
console.log(Math.PI);
console.log(Math.round(4.5));
let today = new Date();
let yy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
console.log(today + "\n" + yy + "年" + mm + "月" + dd + "日");
