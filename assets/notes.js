$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nh").click(function(){
		$(this + " .np").css("display", "auto");
	});
});