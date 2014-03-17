$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nh").click(function(){
		$(this).children().css("display", "auto");
	});
});