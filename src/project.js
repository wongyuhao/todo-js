

class Project{
  
 constructor(title,description,id=null,created,tasksList=[],counter=0,complete){
   this.id=id;
   this.title = title;
   this.created = created;
   this.desc = description;
   this.tasksList = tasksList;
   this.counter=counter;
   this.complete=complete;

 }


 addTask(task){
  this.tasksList.unshift(task);
  console.log(`added task to project ${this.id}`)
 }

 deleteTask(task){
   for(i in tasksList){
     if(task.id===this.tasksList[i]){
       this.tasksList.splice(i,1);
       console.log(`removed task id ${i} from project ${this.id}`)
       return
     }
   }
   console.log("task not found in this project")
 }


}

export default Project;