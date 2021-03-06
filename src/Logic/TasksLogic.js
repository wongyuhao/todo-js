import TasksDOM from "../DOM/TasksDOM";
import {format} from 'date-fns'

const { default: LogicControl } = require("./LogicControl");
const { default: Task } = require("../task");

const TasksLogic = (()=>{

  const newTask = ()=>{
    console.log("new task called")
    if(document.querySelector("#newTask")){
      alert("finish creating your existing task!")
      return
    }else{
      TasksDOM.taskNew();
    }
    
  }

  const createTask=(project)=>{
    console.log("create task called")

    
    let temp = new Task(
      document.forms["newTask"]["taskTitle"].value || `Do something`,
      document.forms["newTask"]["taskDue"].value,
      `t${project.counter++}`,
      document.forms["newTask"]["taskPriority"].value,
      format(new Date(Date.now()),'EEE, d MMM yy'),
      false
    )

    
    project.addTask(temp);
    
  }

  const deleteTask =(project,tID)=>{
    

    for (let i in project.tasksList){
      if (project.tasksList[i].id==tID){
        project.tasksList.splice(i,1);
      }
    }
  }
 




  return {
    newTask,
    createTask,
    deleteTask
  }
})();

export default TasksLogic;