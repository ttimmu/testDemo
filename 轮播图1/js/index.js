var i=0;
var timer;
$(function() {
	//$("#igs").hover(function(){$(".btn").show();},function(){$(".btn").hide();});
	//鼠标放到按钮上显示
	$(".ig").eq(0).show().siblings().hide();
	showtime();
	$(".tab").hover(function(){
		i=$(this).index();
		show();
		clearInterval(timer);//清除轮播
	},function(){
		showtime();
	});
	$(".btn1").click(function(){
		clearInterval(timer);
		if(i==0)
		{
			i=6;
		}
		i--;
		show();
		showtime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if(i==5)
		{
			i=-1;
		}
		i++;
		show();
		showtime();
	});
});
function show(){
	$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function showtime(){
	timer=setInterval(function(){
		i++;
		if(i==6)
		{
			i=0;
		}
		show();
	},4000);
}