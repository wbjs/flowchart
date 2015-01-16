/* app functions */
		function big(){
			/*
			if(scale==0){
				scale=2;
			}else{
				scale*=2;
			}
			ctx.scale(scale,scale);
			*/
			clearCanvas();
			for(i=0;i<objs.length;i++){
				if(objs[i].type!='Line'){
					objs[i].width*=2;
					objs[i].height*=2;
					objs[i].top*=2;
					objs[i].left*=2;
				}else{
					objs[i].moveA(objs[i].pointA.left*2,objs[i].pointA.top*2);
					objs[i].moveD(objs[i].pointD.left*2,objs[i].pointD.top*2);
				}
			}
			update();
			//console.log(scale);
		}
		function small(){
			clearCanvas();
			for(i=0;i<objs.length;i++){
				if(objs[i].type!='Line'){
					objs[i].width*=0.5;
					objs[i].height*=0.5;
					objs[i].top*=0.5;
					objs[i].left*=0.5;
					
				}else{
					objs[i].moveA(objs[i].pointA.left*0.5,objs[i].pointA.top*0.5);
					objs[i].moveD(objs[i].pointD.left*0.5,objs[i].pointD.top*0.5);
				}
			}
			update();
		}
		function help(){
			$('help').show();
		}
		function savetoimage(){
			var data = canvas.toDataURL(); 
			window.open(data);
		}
		function save(){
			var filename=prompt("文件名","file001");
			$.saveObj(filename,objs);
			$.saveObj(filename+'ea8b',scale);//
			
		}
		function openFile(){
			$('selectFiles').show();
			$('selectFiles').text('');
			for(i=0;i<localStorage.length;i++){
				if(localStorage.key(i).indexOf('ea8b')==-1){
					var li=document.createElement('li');
					var img=document.createElement('img');
					img.src='icons/file.png';
					var span=document.createElement('span');
					span.innerHTML=localStorage.key(i);
					var bt_open=document.createElement('button');
					bt_open.id=localStorage.key(i);
					bt_open.innerHTML="打开文件";
					bt_open.onclick=function(){
						//var json=localStorage.getItem(this.innerHTML);
						//console.log(this.fileName);
						scale=$.openObj(this.fileName+'ea8b');//
						//console.log(scale);
						ctx=canvas.getContext('2d');
						
						$('selectFiles').hide();
						var jobjs=$.openObj(this.id);
						objs=new Array();
						loadObjs(jobjs);
						for(i=0;i<objs.length;i++){
							//console.log(i);
							if(objs[i].type!='Line'){
								console.log(objs[i].id+':'+objs[i].type);
								console.log('pu:'+objs[i].pu);
								console.log('pr:'+objs[i].pr);
								if(objs[i].pr!=null){
									for(ii=0;ii<objs.length;ii++){
							
										if(objs[ii].type=='Line'&&objs[ii].id==objs[i].pr.lineId){
											//objs[i].pr.lineId objs[i].pr.at
											//console.log(objs[ii].path);
											objs[i].prline=objs[ii];// why it not work?
											objs[i].prat=objs[i].pr.at;
										}
										
									}
								}if(objs[i].pu!=null){
									for(ii=0;ii<objs.length;ii++){
							
										if(objs[ii].type=='Line'&&objs[ii].id==objs[i].pu.lineId){
											//objs[i].pr.lineId objs[i].pr.at
											console.log(objs[ii].path);
											objs[i].puline=objs[ii];// why it not work?
											objs[i].puat=objs[i].pu.at;
										}
										
									}
								}if(objs[i].pl!=null){
									for(ii=0;ii<objs.length;ii++){
							
										if(objs[ii].type=='Line'&&objs[ii].id==objs[i].pl.lineId){
											//objs[i].pr.lineId objs[i].pr.at
											console.log(objs[ii].path);
											objs[i].plline=objs[ii];// why it not work?
											objs[i].plat=objs[i].pl.at;
										}
										
									}
								}if(objs[i].pd!=null){
									for(ii=0;ii<objs.length;ii++){
							
										if(objs[ii].type=='Line'&&objs[ii].id==objs[i].pd.lineId){
											//objs[i].pr.lineId objs[i].pr.at
											console.log(objs[ii].path);
											objs[i].pdline=objs[ii];// why it not work?
											objs[i].pdat=objs[i].pd.at;
										}
										
									}
								}
							}
						}
						select_obj=null;
						on_obj=null;
						update();
					}
					var bt_delete=document.createElement('button');
					bt_delete.id=localStorage.key(i);
					bt_delete.innerHTML="删除文件";
					bt_delete.style.color="#f00";
					bt_delete.onclick=function(){
						var jobjs=$.delObj(this.id);
						var jobjs=$.delObj(this.id+'ea8b');
						$('selectFiles').hide();
					}
					li.appendChild(img);
					li.appendChild(span);
					li.appendChild(bt_open);
					li.appendChild(bt_delete);
					document.getElementById("selectFiles").appendChild(li);
				}
				////console.log(localStorage.key(i));
			}
			var bt=document.createElement('button');
			bt.innerHTML="close";
			bt.onclick=function(){
				$('selectFiles').hide();		
			}
			document.getElementById("selectFiles").appendChild(bt);
			
		}
		function loadObjs(objs){
			clearAll();
			for(i=0;i<objs.length;i++){
				switch(objs[i].type){
					case"obj_1":
						load_obj_1(objs[i]);
					break;
					case "obj_2":
						load_obj_2(objs[i]);
					break;
					case "obj_3":
						load_obj_3(objs[i]);
					break;
					case "obj_4":
						load_obj_4(objs[i]);
					break;
					case "Line":
						load_line(objs[i]);
					break;
				}
			}
			
			
		}
		function load_obj_1(obj){
			var newobj=new Obj_1();
			newobj.id=obj.id;
			newobj.type=obj.type;
			newobj.background=obj.background;
			newobj.color=obj.color;
			newobj.border=obj.border;
			newobj.border_color=obj.border_color;
			newobj.z_index=obj.z_index;
			newobj.top=obj.top;
			newobj.left=obj.left;
			newobj.width=obj.width;
			newobj.height=obj.height;
			newobj.text=obj.text;
			newobj.pu=obj.pu;
			newobj.pr=obj.pr;
			newobj.pd=obj.pd;
			newobj.pl=obj.pl;
			objs.push(newobj);
		}
		function load_obj_2(obj){
			var newobj=new Obj_2();
			newobj.id=obj.id;
			newobj.type=obj.type;
			newobj.background=obj.background;
			newobj.color=obj.color;
			newobj.border=obj.border;
			newobj.border_color=obj.border_color;
			newobj.z_index=obj.z_index;
			newobj.top=obj.top;
			newobj.left=obj.left;
			newobj.width=obj.width;
			newobj.height=obj.height;
			newobj.text=obj.text;
			newobj.pu=obj.pu;
			newobj.pr=obj.pr;
			newobj.pd=obj.pd;
			newobj.pl=obj.pl;
			objs.push(newobj);
		}
		function load_obj_3(obj){
			var newobj=new Obj_3();
			newobj.id=obj.id;
			newobj.type=obj.type;
			newobj.background=obj.background;
			newobj.color=obj.color;
			newobj.border=obj.border;
			newobj.border_color=obj.border_color;
			newobj.z_index=obj.z_index;
			newobj.top=obj.top;
			newobj.left=obj.left;
			newobj.width=obj.width;
			newobj.height=obj.height;
			newobj.text=obj.text;
			newobj.pu=obj.pu;
			newobj.pr=obj.pr;
			newobj.pd=obj.pd;
			newobj.pl=obj.pl;
			objs.push(newobj);
		}
		function load_obj_4(obj){
			var newobj=new Obj_4();
			newobj.id=obj.id;
			newobj.type=obj.type;
			newobj.background=obj.background;
			newobj.color=obj.color;
			newobj.border=obj.border;
			newobj.border_color=obj.border_color;
			newobj.z_index=obj.z_index;
			newobj.top=obj.top;
			newobj.left=obj.left;
			newobj.width=obj.width;
			newobj.height=obj.height;
			newobj.text=obj.text;
			newobj.pu=obj.pu;
			newobj.pr=obj.pr;
			newobj.pd=obj.pd;
			newobj.pl=obj.pl;
			objs.push(newobj);
		}
		function load_line(obj){
			var newobj=new Line();
			newobj.id=obj.id;
			newobj.type=obj.type;
			newobj.background=obj.background;
			newobj.color=obj.color;
			newobj.border=obj.border;
			newobj.border_color=obj.border_color;
			newobj.z_index=obj.z_index;
			newobj.text=obj.text;
			newobj.pointA=obj.pointA;
			newobj.pointB=obj.pointB;
			newobj.pointC=obj.pointC;
			newobj.pointD=obj.pointD;
			objs.push(newobj);
		}
		function clearCanvas(i){
			if(!i){
				ctx.clearRect(0,0,660,520);
			}else{
				ctx.clearRect(0,0,660,520);
				for(ii=0;ii<objs.length;ii++){
					if(ii==i){
					}else{
						objs[ii].update();
					}
				}
			}
		}
		function clearAll(){
			ctx.clearRect(0,0,660,520);
			objs=new Array();
			select_obj=null;
			on_obj=null;
		}
		function update(){
			clearCanvas();
			//console.log('in update objs length:'+objs.length);
			
			for(i=0;i<objs.length;i++){
				if(objs[i].type=='Line'){
					objs[i].update();
				}
				//console.log(i);
			}for(i=0;i<objs.length;i++){
				if(objs[i].type!='Line'){
					objs[i].update();
				}
				
				//console.log(i);
			}
		}
		function showPoint(){
			update();
			for(i=0;i<objs.length;i++){
				
				if(objs[i].type!='Line'){
					objs[i].selectUp();
					objs[i].selectDown();
					objs[i].selectLeft();
					objs[i].selectRight();
				}
			}
		}
		function del(){
			if(select_obj!=null){
			console.log(select_obj);
				for(i=0;i<objs.length;i++){
					if(objs[i].id==select_obj.id){
						//tools or line?
						if(objs[i].type=='Line'){
							//
							for(ii=0;ii<objs.length;ii++){
								if(objs[ii].puline==objs[i]){
									objs[ii].pu=null;
									objs[ii].puline=null;
								}if(objs[ii].pdline==objs[i]){
									objs[ii].pd=null;
									objs[ii].pdline=null;
								}if(objs[ii].plline==objs[i]){
									objs[ii].pl=null;
									objs[ii].plline=null;
								}if(objs[ii].prline==objs[i]){
									objs[ii].pr=null;
									objs[ii].prline=null;
								}
							}
							//
						}
						objs.splice(i,1);
						console.log(select_obj);
						break;
					}
				}
				select_obj=null;
				console.log(select_obj);
				on_obj=null;
				gotowhere='out';
				$('myCanvas').style("cursor","default");
				update();
			}
		}
		function addobjs(obj){
			obj.id=id++;
			objs.push(obj);
		}
		/* p edit*/
		function setText(text){
			select_obj.text=text;
			update();
		}
		function setTop(top){
			select_obj.top=parseInt(top);
			update();
		}
		function setLeft(left){
			select_obj.left=parseInt(left);
			update();
		}
		function setWidth(width){
			select_obj.width=parseInt(width);
			update();
		}
		function setHeight(height){
			select_obj.height=parseInt(height);
			update();
		}
