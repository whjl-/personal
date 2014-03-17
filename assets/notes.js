$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd .nh").click(function(){
		if($(".np", this).parent().css("display") == "block"){
			$(".np", this).parent().css("display", "none");
		}else{
			$(".np", this).parent().css("display", "auto");
		}
	});
});