/** Class representing a Tree. */
//let permanent_pos=0;
class Tree {
  /**
   * Creates a Tree Object
   * Populates a single attribute that contains a list (array) of Node objects to be used by the other functions in this class
   * @param {json[]} json - array of json objects with name and parent fields
   */
   //let permanent_pos=0;
   //permanent_pos=new int;
   permanent_pos=0;
   constructor(json) {
	//console.log("asdfasf",json);
	this.nodes = new Array();
	this.nodes = json.map(N => new Node(N.name,N.parent));
	
	//let permanent_pos=0;

	//this.previous_node = null;
	//for(let i=0;i<json.length;i++){
	//	let new_node = new Node(json[i].name,json[i].parent);
	//	new_node.parentNode = this.previous_node;
	//	//this.nodes.push(new_node);
	//	//this.previous_node = new_node;
	//	//console.log(new_node.parentNode);

	//	this.nodes.push(new_node);
	//}
	console.log(this.nodes);

	//const parent_node = nodes.find(element => );	
	this.nodes.forEach(element => element.parentNode = this.nodes.find(element2 => element.parentName === element2.name));
	console.log(this.nodes);
	//for(let i=0;i<this.nodes.length;i++){
	//	if(this.nodes[i].name === "Animal"){
        //            this.nodes[i].parentNode = null;
        //        }
        //        else if(this.nodes[i].name === "Sponges" || this.nodes[i].name === "Nephrozoa"){
        //              this.nodes[i].parentNode = this.nodes[0];
        //        }
        //        else if(this.nodes[i].name === "Calcinea" || this.nodes[i].name === "Petrosina"){
        //              this.nodes[i].parentNode = this.nodes[1];
        //        }
        //        else if(this.nodes[i].name === "Vertebrates" || this.nodes[i].name === "Protosomes"){
        //              this.nodes[i].parentNode = this.nodes[2];
        //        }
        //        else if(this.nodes[i].name === "Lampreys" ||this.nodes[i].name === "Sharks" || this.nodes[i].name === "Tetrapods" ){
        //              this.nodes[i].parentNode = this.nodes[5];
        //        }
        //        else if(this.nodes[i].name === "Turtles"){
        //              this.nodes[i].parentNode = this.nodes[9];
        //        }
        //        else if(this.nodes[i].name === "Water Bears" || this.nodes[i].name === "Hexapods"){
        //              this.nodes[i].parentNode = this.nodes[6];
        //        }
        //        else{
        //              this.nodes[i].parentNode = this.nodes[12];
        //        }
	//}
  } 

  //let permanent_pos=0;
  /**
   * Assign other required attributes for the nodes.
   */
  buildTree () {
    // note: in this function you will assign positions and levels by making calls to assignPosition() and assignLevel()
	//if(this.nodes[1].name == "Animal")
	 // this.nodes[0].level = 0;
	//this.nodes.forEach(node => node.children.push(this.nodes.find(child => child.parentName === node.name))); 
	//console.log(this.nodes);
	
	for(let i=0;i<this.nodes.length;i++){
		for(let j=i+1; j<this.nodes.length;j++){
			if(this.nodes[i].name === this.nodes[j].parentName){
				this.nodes[i].children.push(this.nodes[j]);
			}
		}
	}

	console.log(this.nodes);


	this.assignLevel(this.nodes[0],0);
	this.assignPosition(this.nodes[0],this.permanent_pos);
	console.log(this.nodes);
	//var new_level = 0; 
	//var parent_name;

	//for(let i=0;i<this.nodes.length;i++){
	//	//assignPosition(nodes[i],nodes[i].parent);
	//	//console.log(this.nodes[i].name);
	//	if(this.nodes[i].name == "Animal"){
	//		this.assignLevel(this.nodes[i],0);
	//		console.log(this.nodes[i].name,i);
	//		//this.nodes[i].level = 0;
	//		//parent_name = this.nodes[i].name;
	//	}
	//	else{
	//		if(this.nodes[i].parentName != parent_name){
	//			parent_name = this.nodes[i].parentName;
	//		//	console.log(this.nodes[i].name,parent_name, this.nodes[i].parentNode.level);
	//			new_level = this.nodes[i].parentNode.level+1;
	//			//console.log(parent_name,this.nodes[i].name,level);
	//		}
	//		console.log(parent_name,this.nodes[i].name,new_level);
	//		console.log(this.nodes[2].name, this.nodes[2].level);
	//		this.assignLevel(this.nodes[i],new_level);
	//	}
	//	
	//	
	//	if(this.nodes[i].name === "Animal"){
	//		this.assignPosition(this.nodes[i],0);
	//	}
        //        else if(this.nodes[i].name === "Sponges" || this.nodes[i].name === "Calcinea"){
        //         	this.assignPosition(this.nodes[i],0);
        //        }
        //        else if(this.nodes[i].name === "Petrosina"){
        //            this.assignPosition(this.nodes[i],1)
        //        }
        //        else if(this.nodes[i].name === "Vertebrates" || this.nodes[i].name === "Nephrozoa" || this.nodes[i].name === "Lampreys"){
        //        	this.assignPosition(this.nodes[i],2);
	//	}
        //        else if(this.nodes[i].name === "Sharks"){
        //        	this.assignPosition(this.nodes[i],3);
	//	}
        //        else if(this.nodes[i].name === "Turtles" || this.nodes[i].name === "Tetrapods"){
	//		 this.assignPosition(this.nodes[i],4);
        //        }
        //        else if(this.nodes[i].name === "Water Bears" || this.nodes[i].name === "Protosomes"){
        //        	this.assignPosition(this.nodes[i],5);
	//	}
        //        else if(this.nodes[i].name === "Hexapods" || this.nodes[i].name === "Insects"){
        //        	this.assignPosition(this.nodes[i],6);
	//	}
	//	else{
	//		this.assignPosition(this.nodes[i],7);
	//	}


	//}
 
  }

  /**
   * Recursive function that assign levels to each node
   */
  assignLevel (node, level) {
	//console.log(node);
	//node.level = level;
	
	node.level = level;
	console.log(node.name,node.level);
	if(node.children.length != 0){
		//console.log("children");
		
		//this.assignLevel(node.children[0],level+1);
		
		for(let childs=0; childs < node.children.length; childs++){
			this.assignLevel(node.children[childs],level+1);
		}
		//console.log("children null");
		//return node;
	}
	//this.assignLevel(node.children[0],level+1);
	return node;

  }


  /**
   * Recursive function that assign positions to each node
   */
  assignPosition (node, position) {
	//node.position = position;
	
	//let pos = position;
	node.position = position;
	if(node.children.length != 0){
		for(let child=0; child < node.children.length; child++){
			if(child > 0){
				this.permanent_pos += 1;
				console.log("if child > 0 ",node.children[child].name,this.permanent_pos);
			}
			this.assignPosition(node.children[child],this.permanent_pos);
		}
	}
	return node;

  }

  /**
   * Function that renders the tree
   */
  renderTree () {
	
  }

}
