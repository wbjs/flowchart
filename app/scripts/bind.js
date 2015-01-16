function bind(){
	
	$('obj_1').bind('dragstart',function(){drag(event)});
	$('obj_2').bind('dragstart',function(){drag(event)});
	$('obj_3').bind('dragstart',function(){drag(event)});
	$('obj_4').bind('dragstart',function(){drag(event)});
	
	$('myCanvas').bind('mousedown',on_mouse_down);
	$('myCanvas').bind('mouseup',on_mouse_up);
	$('myCanvas').bind('dblclick',on_mouse_double_click);
	$('title').bind('change',on_title_text_change);
	$('btnTitle').bind('click',on_title_text_change);
	$('myCanvas').bind('mousemove',on_mouse_move);

	$('showHelp').bind('click',function(){
		$("help").show();	
	});
	$('closeHelp').bind('click',function(){
		$("help").hide();	
	});
}

		
		
