$(document).ready(function(){
    $("section>h2").click(function(){
	var contsection= $(this).parent().children("ul.contsection");
	var header=$(this);
	contsection.slideToggle("slow", function(){
		if (contsection.is(':hidden'))
		{header.addClass('up_arr');}
		else
		{header.removeClass('up_arr');}
		});
	});
	
	$("select").bind('change',function (e) {		
		$('#amsActivityContent').scrollTop(0);
		 var amsActivityVal=$.trim($(this).val());
		 var offsetval = $('#amsActivityContent').find("#"+amsActivityVal).offset();
		 $('#amsActivityContent').animate({scrollTop: offsetval.top -140 },
    	{
      	duration: 'slow',
      	complete: function() {
			var contsection = $("#"+amsActivityVal+ " ul.contsection");
			contsection.slideDown("slow", function(){
				$("#"+amsActivityVal+ " h2").removeClass('up_arr');
			});
		}
    	});	
	});
	
	$("#closeAll").click(function(){
	$("ul.contsection").slideUp('slow', function(){
		$("section>h2").addClass('up_arr');
		});
		$("header select").val("");
	});
	
	$("#openAll").click(function(){
	$("ul.contsection").slideDown('slow', function(){
		$("section>h2").removeClass('up_arr');
		});
	});
});