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


	}

	AddAt(data,index){

		if (index > this.size) {
			return;
		}

		if (index === 0) {
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

	}
	getAt(index){

		var current = this.head;
		var i = 0;

		while(current){
			if (i==index) {
				console.log(current.data);
			}

			current=current.next;
			i++;
		}

	}

	Affiche(){
		var current=this.head;
		while(current){
			console.log(current.data);
			current=current.next;
		}
	}

	deletAt(index){
		if(index>this.size){
			return;
		}
		var current = this.head;
		var previous;
		var i = 0;

		if(index === 0){
			this.head = current.next;

		} else {
			while(i<index){
				previous=current;
				current=current.next;
				i++;
			}
			previous.next=current.next;
		}
		this.size--;

	}

	deletList(){
		this.head=null;
		this.size=0;
	}

}


var ll = new LList();



ll.Addlast(1);
ll.Addlast(2);
ll.Addlast(3);
ll.Addlast(4);

ll.AddAt(5,2);



ll.Affiche();



