$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd").click(function(){
		if($(this).css("dispaly") == "auto"){
			$(".np", this).css("display", "none");
		}else{
			$(".np", this).css("display", "auto");
		}
	});
});