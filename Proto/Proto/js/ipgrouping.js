$(document).ready(function(){
	setheight('mn_1','100'); // function to manually set height of individual section.
	
    $("section>div>button").click(function(){
	var contsection= $(this).parent().parent().children("div.groupoptions");	
	var header=$(this);
	contsection.slideToggle("slow", function(){
		if (contsection.is(':hidden'))
		{header.addClass('up_arr');}
		else
		{header.removeClass('up_arr');}
		});
	});
	var offsetval=0;
	$("header a").click(function (e) {
		
		$('#ipGroupingContent').scrollTop(0);
		 var linkVal=$.trim($(this).attr('class'));
		 offsetval = $('#ipGroupingContent').find("."+linkVal).offset();		
		 $('#ipGroupingContent').animate({scrollTop: offsetval.top -140 },
    	{
      	duration: 'slow',
      	complete: function() {
			var contsection = $("section."+linkVal+ " div.groupoptions");
			contsection.slideDown("slow", function(){
				$("section."+linkVal+ " div.groupseperator button").removeClass('up_arr');
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

function setheight(e,h)
{
	$("section."+e).children(".groupoptions").find("li").css('height',h+"px");
}