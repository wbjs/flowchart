function on_mouse_down(){
	p = getEventPosition(event);
	mousedown=true;
	if(gotowhere=='over'){
		select_obj=on_obj;
		gotowhere=='move';
		clearCanvas();
		update();
		if(select_obj.type!='Line'){
			select_obj.select();
			select_obj.prinText();
			$('text').val(select_obj.text);
			$('left').val(select_obj.left);
			$('top').val(select_obj.top);
			$('width').val(select_obj.width);
			$('height').val(select_obj.height);
		}else{
			select_obj.select();
		}
	}
	if(gotowhere=="out"){
		state='selectNone';	
		select_obj=null;
	}
}
