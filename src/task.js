class Task{
  constructor(title,due,id,priority="none" ,created,completed=false){
    
    this.title = title;
    this.due = due;
    this.id = id;
    this.priority=priority;
    this.created=created;
    this.completed=completed;
  }


  

}

export default Task;

