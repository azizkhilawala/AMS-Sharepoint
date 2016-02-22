//hiding the accordion content
$("ul.contsection").attr("style","display:none");

//toggling the accordion
$("section > h2").click(function(){
   $(this).parent().children(".contsection").slideToggle();
});


///dynamically add options --- begin

$("select").prepend('<option>Select</option>');
var heading1=[];
var optionValue=[];
function fillList(){
$("section").each(function(index){
	heading1[index] = $.trim($(this).children("h2").text());
	optionValue[index] = '<option>'+heading1[index]+'</option>';
	$("select").append(optionValue[index]);
});
}

///dynamically add options --- end


///onselect open accordion --- begin

$("select[name='activity']").on('change',function(e){
 var activitySelected = $.trim($(this).val());
 $("section").each(function(){
 	var heading = $.trim($(this).children("h2").text());
 	 if (activitySelected == heading)
 	{
 		var scrollTo = $(this).children("ul.contsection");
 		$(this).children("ul.contsection").slideDown();
 		$('#amsActivityContent').animate({ scrollTop: $(scrollTo).offset().top - 300});
 	}
 	else{
 		$(this).children("ul.contsection").slideUp();
 		$("#amsActivityContent").scrollTop(0);
 	}
 });
 });

///onselect open accordion --- end
