class Node {
	constructor(data , next = null){
		this.data = data;
		this.next = next;

	}
}

class LList {
	constructor(){
		this.head = null;
		this.size = 0;
	}

	Addfirst(data){
		this.head = new Node(data, this.head);
		this.size++;
		return;

	}

	Addlast(data){
		var node = new Node(data);
		var current;

		if(this.head===null){
			this.head = node;
		}
		else {
			current=this.head;

			while(current.next){
				current=current.next;
			}
			current.next=node;
		}
		this.size++;
		return;


	}

	AddAt(data,index){

		if (index > 0 && index > this.size) {
			return;
		}

		if (index == 0) {
			this.head = new Node(data , this.head);
			return;
		}

		var node = new Node(data);
		var current,previous;
		current = this.head;
		var i = 0;
		while(i<index){
			previous=current;
			current=current.next;
			i++;

		}

		node.next=current;
		previous.next=node;
		return;

	}
	getAt(index){

		var current = this.head;
		var i = 0;

		while(current){
			if (i==index) {
				return current.data;
			}

			current=current.next;
			i++;
		}
		return;

	}

	Affiche(){
		var current=this.head;
		var tab=[];
		
		
		while(current){
			
			tab.push(current.data);
			current=current.next;
			
		}
	
		return tab;

		
	}

	deletAt(index){
		if(index>this.size){
			return;
		}
		var current = this.head;
		var previous;
		var i = 0;

		if(index == 0){
			this.head = current.next;
			return;

		} else {
			while(i<index){
				previous=current;
				current=current.next;
				i++;
			}
			previous.next=current.next;
		}
		this.size--;
		return;

	}

	deletList(){
		this.head=null;
		this.size=0;
		return;
	}

}

/*for console test
var ll = new LList();

ll.Addlast(1);



ll.Affiche();*/

var ll = new LList();

function ajoutDebut(){
	
	ll.Addfirst(document.getElementById('data').value);

}

function ajoutFin(){

	ll.Addlast(document.getElementById('data').value);
}

function ajoutIn(){
	ll.AddAt(document.getElementById('data').value , document.getElementById('index').value);

}



function removeList(){
	ll.deletList();
}

function removeAt(){
	ll.deletAt(document.getElementById('index').value);
}

function printList(){
	
	document.getElementById("res").innerHTML=ll.Affiche();

}

function getIn(){

	document.getElementById("res2").innerHTML=ll.getAt(document.getElementById('index').value);	

}

