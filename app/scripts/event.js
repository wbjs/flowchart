state='selectNone';
on_obj=null;
select_obj=null;
mousedown=false;
gotowhere='none';
function on_title_text_change(){
	$('setTitleCP').hide();
	select_obj.text=$('title').val();
	$('title').focus();
}
function getKeyCode(e) {
	var keyCode = 0;
	var e = e || window.event;
	keyCode = e.keyCode || e.which || e.charCode;
	if(keyCode==46){
		if(select_obj!=null){
			del();
		}
	}
}
function allowDrop(ev){
	ev.preventDefault();
}
function drag(ev){
	ev.dataTransfer.setData("id",ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	var id=ev.dataTransfer.getData("id");
	switch(id){
		case "obj_1":
			var obj=new Obj_1();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		case "obj_2":
			var obj=new Obj_2();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);		
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		case "obj_3":
			var obj=new Obj_3();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		case "obj_4":
			var obj=new Obj_4();
			addobjs(obj);
			var bbox =canvas.getBoundingClientRect();
			obj.left=ev.pageX-bbox.left *(canvas.width / bbox.width);
			obj.top=ev.pageY- bbox.top  * (canvas.height / bbox.height);
			obj.left-=obj.width/2;
			obj.top-=obj.height/2;
			obj.update();
		break;
		default:
			alert(id+" 工具正在开发中，请稍后。。。");
	}
}
function getEventPosition(ev){
	var x, y;
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	return {x: x, y: y};
}
/* actions */

function on_mouse_double_click(){
	if(select_obj!=null){
		$('title').val(select_obj.text);
		$('setTitleCP').style("top",p.y+"px");
		$('setTitleCP').style("left",p.x+"px");
		$('setTitleCP').show();
		$('title').focus();
	}	

}
