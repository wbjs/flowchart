function init(){
	scale=1;
	id=1;
	tool="obj_1";
	objs=new Array();
	canvas=document.getElementById('myCanvas');
	canvas.top=0;
	canvas.width=660;
	canvas.height=520;
	ctx=canvas.getContext('2d');
	mousedown=false;
	window.addEventListener('keydown', getKeyCode,true);
	bind();
	target_obj=null;
	target_at=null;
}
window.onload=init;
