$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd").click(function(){
		$(".np", this).css("display", "auto");
	});
});