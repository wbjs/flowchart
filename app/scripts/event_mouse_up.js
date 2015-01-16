function on_mouse_up(){
	console.log('on up select_obj:'+select_obj);
	mousedown=false;
	switch(gotowhere){
		case 'lineup':
			if(select_obj.pu==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointUp().left,select_obj.pointUp().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pu={'lineId':line.id,'at':'A'};
				select_obj.puline=line;
				select_obj.puat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					
					if(target_at=='down'){
						target_obj.pd={'lineId':line.id,'at':'D'};
						target_obj.pdline=line;
						target_obj.pdat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
				
				}
			}
		break;
		case 'linedown':
			if(select_obj.pd==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointDown().left,select_obj.pointDown().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pd={'lineId':line.id,'at':'A'};
				select_obj.pdline=line;
				select_obj.pdat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}
				
				}
			}
		break;
		case 'lineright':
			if(select_obj.pr==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointRight().left,select_obj.pointRight().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pr={'lineId':line.id,'at':'A'};
				select_obj.prline=line;
				select_obj.prat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='down'){
						target_obj.pd={'lineId':line.id,'at':'D'};
						target_obj.pdline=line;
						target_obj.pdat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
				
				}
			}
		break;
		case 'lineleft':
			if(select_obj.pl==null){
				showPoint();
				var line=new Line();
				line.moveA(select_obj.pointLeft().left,select_obj.pointLeft().top);
				//line.moveB(p.x+50,select_obj.pointRight().top);
				//line.moveC(p.x+50,p.y);
				line.moveD(p.x,p.y);
				addobjs(line);
				update();
				select_obj.pl={'lineId':line.id,'at':'A'};
				select_obj.plline=line;
				select_obj.plat='A';
				gotowhere="none";
				select_obj=null;
				if(target_obj!=null){
					if(target_at=='up'){
						target_obj.pu={'lineId':line.id,'at':'D'};
						target_obj.puline=line;
						target_obj.puat='D';
					}
					if(target_at=='down'){
						target_obj.pd={'lineId':line.id,'at':'D'};
						target_obj.pdline=line;
						target_obj.pdat='D';
					}
					if(target_at=='left'){
						target_obj.pl={'lineId':line.id,'at':'D'};
						target_obj.plline=line;
						target_obj.plat='D';
					}if(target_at=='right'){
						target_obj.pr={'lineId':line.id,'at':'D'};
						target_obj.prline=line;
						target_obj.prat='D';
					}
				
				}
			}
		break;
		default:
		gotowhere="none";
		
	}
}
