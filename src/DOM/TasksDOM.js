import  {createElementWithInfo, appendChildren } from './util'
import Task from '../task'
const TasksDOM =(()=>{
  const createTasksDiv = () =>{
    const div= createElementWithInfo("div","tasksDiv");
    

    const taskSubheader = createElementWithInfo('div',"taskSubheader")

    const btnCreateTask = createElementWithInfo("button","btnCreateTask");
    btnCreateTask.innerHTML='<i class="fas fa-plus"></i>  Add Task';

    appendChildren(
      taskSubheader,
      createElementWithInfo('p','subheaderText'),
      btnCreateTask
      )

    
    taskSubheader.style.display="none"

    const tasksHolder = createElementWithInfo("div","tasksHolder");

  appendChildren(div,taskSubheader,tasksHolder);
  return div;
  }

  const addLow = (t)=>{
    t.classList.add("low");
    t.classList.remove("medium")
    t.classList.remove("high")
    t.classList.remove("none")
  }

  const addMedium = (t)=>{
    t.classList.add("medium");
    t.classList.remove("low")
    t.classList.remove("high")
    t.classList.remove("none")
  }

  const addHigh = (t)=>{
    t.classList.add("high");
    t.classList.remove("low")
    t.classList.remove("medium")
    t.classList.remove("none")
  }

  const addNone = (t)=>{
    t.classList.add("none");
    t.classList.remove("low")
    t.classList.remove("medium")
    t.classList.remove("high")
  }

  



  const appendTask=(task)=>{
   
    const tasksHolder = document.getElementById("tasksHolder");
    
    
    const holder = createElementWithInfo("div",task.id,"task");
  
    switch(task.priority){
      case "low": 
        addLow(holder);
        break;
      case "medium":
        addMedium(holder);
        break;
      case "high":
        addHigh(holder);
        break;
      default:
        addNone(holder);
    }

    const Ldiv = createElementWithInfo('div',null,"tLdiv")
    const Rdiv = createElementWithInfo('div',null,"tRdiv")


    const title = createElementWithInfo("p",null,"taskTitle");
    title.innerHTML=`${task.title}`;
    
    appendChildren(Ldiv,title)

    const due = createElementWithInfo("p",null,"taskDue");
    if (task.due===""){
      due.innerHTML=""
    }else{
      due.innerHTML=`Due ${task.due}`;
    }

    const checkboxDiv = createElementWithInfo("div",null,"pretty","p-default","p-round","p-smooth")   
    const checkboxState = createElementWithInfo('div',null,"state","p-success")
    checkboxState.innerHTML="<label></label>"

    const completed = document.createElement("input");
    completed.setAttribute("type","checkbox")
    completed.setAttribute("id","taskCompleted")
    completed.setAttribute("name","taskCompleted")
    
    

    
    completed.checked=task.completed;
    if (task.completed){
      
      holder.classList.add("completed")
      
    }else{
      holder.classList.remove("completed")
    
    }

    
    
   
    completed.addEventListener("change",()=>{
      if (task.completed){
        task.completed = false;
        holder.classList.remove("completed")
      }else{
        task.completed= true
        holder.classList.add("completed")
        
      }
    
    })

    appendChildren(checkboxDiv,completed,checkboxState)
    
    const delTask = createElementWithInfo("button",`del-${task.id}`,"taskDelete");
    delTask.innerHTML=`<i class="far fa-trash-alt">`;
  
    appendChildren(Rdiv,due,checkboxDiv,delTask)
    
  
    appendChildren(holder,Ldiv,Rdiv);
    appendChildren(tasksHolder,holder);
  
    
  
  }
  
  const splashPage=()=>{
    const div = createElementWithInfo("div",null);
    return div;
  }
  
  
  const refreshTasks = (project)=>{
    const tasksHolder = document.getElementById("tasksHolder");
    tasksHolder.innerHTML=``;
    
    const subheader = document.querySelector("#taskSubheader");
    const subheaderText = document.querySelector("#subheaderText");

    


    if(!project){
      subheader.style["display"]="none";
      return;
    }
    subheader.style["display"]="flex";
    subheaderText.textContent= `${project.title}`

    
    
    
    for(let i in project.tasksList){
      if(project.tasksList[i].completed){
        appendTask(project.tasksList[i]);
      }
    }

    for(let i in project.tasksList){
      if(!project.tasksList[i].completed){
        appendTask(project.tasksList[i]);
      }
    }


    
  }

  const taskNew=()=>{
    console.log("tasks new called")
    const tasksHolder = document.getElementById("tasksHolder");
    
    if(document.querySelector("#newTask")){
      alert("finish adding your existing task!")
      return
    }
    
    const holder = createElementWithInfo("div","newTask","task");
  
    
  
    holder.innerHTML=
    `
    <form name ="newTask" >

    <label for="taskTitle"></label>
    <input type="text" id="taskTitle" name="taskTitle" placeholder="Task Title"><br>

    <input type="date" id="taskDue" name="taskDue" placeholder="Due Date">

    <select id="taskPriority" name="taskPriority">
    <option value="none">None</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      
    </select> 

    </form>`
  
    const save = createElementWithInfo("button","taskSave");
    save.innerHTML=`<i class="far fa-save"></i>`;
  
    
  
    appendChildren(holder,save)
    tasksHolder.prepend(holder);
  }



  return {
    createTasksDiv,
    refreshTasks,
    taskNew
  }
})();

export default TasksDOM;