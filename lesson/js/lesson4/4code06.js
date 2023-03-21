$(function(){
    $(".weather").css("color","#ff7c89");
});

$(function(){
	$("#nice").click(function(){
		alert("いいね！");
	});
	$("#nice").on("mouseover mouseout",function(){
		console.log("いいね！");
	});		
	// nabiを非表示にする
	$("#navi").hide();
});

document.write("<br>4code06のjQueryで、「晴れ」を赤にします。");
document.write("<br>ID=nsviを非表示にします。");
document.write("<br>マウス操作でalertボックスとconsole.log出力をします。");