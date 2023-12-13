/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(list=[]){
this.list=list;
  }
  add(a){
   let len=this.list.length;
  this.list[len]=a;
  console.log(this.list);
  }
  remove(a){
    this.list.splice(a,1);
  }
  update(a,b){
    if(a<this.list.length){
    this.list[a]=b;}
  
  }
  getAll(){
    return this.list;
  }
  get(a){
    if(a<this.list.length){
  return this.list[a];
    }else{
      return null;
    } 
  }
  clear(){
    this.list.splice(0,this.list.length);
  }

}

module.exports = Todo;
