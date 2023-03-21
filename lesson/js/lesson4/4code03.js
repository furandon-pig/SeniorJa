$(function(){
    $(".weather").css("color","#ff7c89").fadeOut("slow");
});

$(function(){
	// ul直下のli要素に背景色を指定
	$("nav").css("background-color","pink");
	// .list-list直下の.itemに文字色赤を指定
	$(".list-list > .item").css("color","red");
});

document.write("<br>4code03のjQueryで、「晴れ」を赤にし、フェードアウトします。");
document.write("<br>navの背景色を指定し、.list-list直下の.itemに文字色赤を指定します。");
