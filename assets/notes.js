$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd .nh").click(function(){
		if($(this).parent().find('.np').css("display") == "block"){
			$(this).parent().find('.np').css("display", "none");
		}else{
			$(this).parent().find('.np').css("display", "auto");
		}
	});
	var url = document.URL;
	var id = url.substring(url.lastIndexOf('#') + 1);
	var nh = "";
	$(".nh").each(function(i, obj){
		nh = $(this).html().toLowerCase();
		nh = nh.replace('/[^\-\s\pN\pL]+/g', '');
		nh = nh.replace('/[\-\s]+/g', '-');
		nh = $.trim(nh);
		if(nh == id){
			$(this).parent().find('.np').css("display", "block");
		}
		alert(id);
		alert(nh);
	});
});