$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd .nh").click(function(){
		if($(this).parent().find('.np').css("display") == "block"){
			$(this).parent().find('.np').css("display", "none");
		}else{
			$(this).parent().find('.np').css("display", "auto");
		}
	});
});