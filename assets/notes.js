$(document).ready(function(){
	var url = document.URL;
	var id = url.substring(url.lastIndexOf('#') + 1);
	var nh = "";
	$(".nh").each(function(i, obj){
		nh = $(this).val().toLowerCase();
		nh = nh.replace('/[^\-\s\pN\pL]+/g', '');
		nh = nh.replace('/[\-\s]+/g', '-');
		nh = $.trim(nh);
		alert(nh);
	});
	$(".np").css("display", "none");
	$(".nhd .nh").click(function(){
		if($(this).parent().find('.np').css("display") == "block"){
			$(this).parent().find('.np').css("display", "none");
		}else{
			$(this).parent().find('.np').css("display", "auto");
		}
	});
});