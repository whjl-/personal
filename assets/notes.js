$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd").click(function(){
		if($(".np", this).css("display") == "block"){
			$(".np", this).css("display", "none");
		}else{
			$(".np", this).css("display", "auto");
		}
	});
});