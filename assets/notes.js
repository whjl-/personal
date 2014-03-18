function cToS(Text){
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}
$(document).ready(function(){
	$(".np").css("display", "none");
	$(".nhd .nh").click(function(){
		if($(this).parent().find('.np').css("display") == "block"){
			$(this).parent().find('.np').css("display", "none");
		}else{
			$(this).parent().find('.np').css("display", "auto");
			window.location.hash = "#" + cToS($(this).html());
			return false;
		}
	});
	var url = document.URL;
	var id = url.substring(url.lastIndexOf('#') + 1);
	var nh = "";
	$(".nh").each(function(i, obj){
		nh = $(this).html().trim();
		nh = cToS(nh);
		if(nh == id){
			$(this).parent().find('.np').css("display", "block");
		}
	
	});
});