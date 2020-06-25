class Task{
  constructor(title,due,id,priority="low" ,created=Date.now(),completed=false){
    
    this.title = title;
    this.due = due;
    this.id = id;
    this.priority=priority;
    this.created=created;
    this.completed=completed;
  }

  toggleComplete(){
    if(this.completed){
      console.log(`task ${this.title} set to false`)
      this.completed=false;
    }else{
      console.log(`task ${this.title} set to true`)
      this.completed=true;
    }
  }

  

}

export default Task;

