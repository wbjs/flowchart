/* objs */
		function Line(){
			this.type="Line";
			this.id="";
			this.background="#fff";
			this.color="#000";
			this.border=2;
			this.border_color="#999";
			this.z_index=0;
			this.length = 0; //两点之间的长度
			this.radii = 0; //圆点的半径
			this.arrow_len = 10; //箭头的长度
			this.color = "#ffff00";
			this.rotation = 0;
			//
			this.pointA={'left':5,'top':10};
			this.pointB={'left':5,'top':10};
			this.pointC={'left':5,'top':10};
			this.pointD={'left':5,'top':10};
		}
		Line.prototype.path=function(){
			//ctx.lineWidth = this.border;
			//ctx.beginPath();
			//ctx.moveTo(this.pointA.left,this.pointA.top);
			//ctx.lineTo(this.pointB.left,this.pointB.top);
			//ctx.lineTo(this.pointC.left,this.pointC.top);
			//ctx.lineTo(this.pointD.left,this.pointD.top);			
			//ctx.strokeStyle="green";
			//ctx.stroke();
			//
			//
			 var dy = this.pointA.top - this.pointD.top;
			    var dx = this.pointA.left - this.pointD.left;
			    this.rotation = Math.atan2(dy, dx);
			    if (dy == 0) this.length = Math.abs(dx);
			    else if (dx == 0) this.length = Math.abs(dy);
			    else this.length = Math.sqrt(dx * dx + dy * dy);
			//
			  ctx.save();
			  ctx.translate(this.pointA.left,this.pointA.top);
			  ctx.rotate(this.rotation);
			  ctx.lineWidth = this.border;
			  ctx.fillStyle = this.color;
			  ctx.beginPath();
			  ctx.moveTo(0, 0);
			  ctx.lineTo(0, -2);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), -2);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), -4);
			  ctx.lineTo( - (this.length - this.radii), 0);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), 4);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), 2);
			  ctx.lineTo(0, 2);
			  ctx.closePath();
			  ctx.stroke();
			  ctx.restore();
			//
		}
		Line.prototype.moveA=function(left,top){
			this.pointA={'left':left,'top':top};
		}
		Line.prototype.moveB=function(left,top){
			this.pointB={'left':left,'top':top};
		}
		Line.prototype.moveC=function(left,top){
			this.pointC={'left':left,'top':top};
		}
		Line.prototype.moveD=function(left,top){
			this.pointD={'left':left,'top':top};
		}
		Line.prototype.selectUp=function(){

		}
		Line.prototype.selectUpOver=function(){

		}
		Line.prototype.selectDown=function(){

		}
		Line.prototype.selectDownOver=function(){

		}
		Line.prototype.selectLeft=function(){

		}		
		Line.prototype.selectLeftOver=function(){

		}
		Line.prototype.selectRight=function(){

		}
		Line.prototype.selectRightOver=function(){

		}
		Line.prototype.selectA=function(){
			ctx.fillStyle='blue';
			ctx.beginPath();
			ctx.arc(this.left,this.top,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Line.prototype.selectB=function(){
			ctx.fillStyle='blue';
			ctx.beginPath();
			ctx.arc(this.left+this.width,this.top,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Line.prototype.selectC=function(){
			ctx.fillStyle='blue';
			ctx.beginPath();
			ctx.arc(this.left,this.top+this.height,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Line.prototype.selectD=function(){
			ctx.fillStyle='blue';
			ctx.beginPath();
			ctx.arc(this.left+this.width,this.top+this.height,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Line.prototype.over=function(){
			ctx.beginPath();
			ctx.moveTo(this.left+this.width/4,this.top);
			ctx.lineTo(this.left,this.top+this.height);
			ctx.lineTo(this.left+this.width/4*3,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top);
			ctx.lineTo(this.left+this.width/4,this.top);
			ctx.strokeStyle="blue";
			ctx.stroke();
			this.selectUp();
			this.selectDown();
			this.selectLeft();
			this.selectRight();
			this.selectA();
			this.selectB();
			this.selectC();
			this.selectD();
		}
		Line.prototype.select=function(){
			 var dy = this.pointA.top - this.pointD.top;
			    var dx = this.pointA.left - this.pointD.left;
			    this.rotation = Math.atan2(dy, dx);
			    if (dy == 0) this.length = Math.abs(dx);
			    else if (dx == 0) this.length = Math.abs(dy);
			    else this.length = Math.sqrt(dx * dx + dy * dy);
			//
			  ctx.save();
			  ctx.translate(this.pointA.left,this.pointA.top);
			  ctx.rotate(this.rotation);
			  ctx.lineWidth = this.border;
			  
			  ctx.beginPath();
			  ctx.moveTo(0, 0);
			  ctx.lineTo(0, -2);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), -2);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), -4);
			  ctx.lineTo( - (this.length - this.radii), 0);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), 4);
			  ctx.lineTo( - (this.length - this.radii - this.arrow_len), 2);
			  ctx.lineTo(0, 2);
			  ctx.closePath();
			  ctx.strokeStyle="red";
			  ctx.stroke();
			  ctx.restore();
		}
		Line.prototype.prinText=function(){
			
		}
		Line.prototype.update=function(){
			this.path();
		}
		//
