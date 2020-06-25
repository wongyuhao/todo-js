import  {createElementWithInfo, appendChildren } from './util'

const TasksDOM =(()=>{
  const createTasksDiv = () =>{
    const div= createElementWithInfo("div","tasksDiv");
    

    const info = createElementWithInfo('p',"projectInfo")
    

    const tasksHolder = createElementWithInfo("div","tasksHolder");

  appendChildren(div,info,tasksHolder);
  return div;
  }


  const appendTask=(task)=>{
    console.log("appending...")
    const tasksHolder = document.getElementById("tasksHolder");
    
    
    const holder = createElementWithInfo("div",task.id,"task");
  
    
  
    const title = document.createElement("p");
    title.innerHTML=`Title:${task.title}`;
    
    const due = document.createElement("p");
    due.innerHTML=`Due:${task.due}`;

    const priority = document.createElement("p");
    priority.innerHTML=`Priority:${task.priority}`;
  
    const created = document.createElement("p");
    created.innerHTML=`Time created: ${task.created}`
    
    const completed = document.createElement("input");
    completed.setAttribute("type","checkbox")
    completed.setAttribute("id","taskCompleted")
    completed.setAttribute("name","taskCompleted")
    completed.checked=task.completed;
   
    completed.addEventListener("change",function(){task.toggleComplete()})
    
    const delTask = createElementWithInfo("button",`del-${task.id}`,"taskDelete");
    delTask.innerHTML=`delete task`;
  
    
    
  
    appendChildren(holder,title,due,priority,created,completed,delTask);
    appendChildren(tasksHolder,holder);
  
    
  
  }
  
  
  
  const refreshTasks = (project)=>{
    const tasksHolder = document.getElementById("tasksHolder");
    tasksHolder.innerHTML=``;
    

    const info = document.querySelector("#projectInfo");

    if(!project){
      info.textContent=`select or create a project`;
      return;
    }
    info.textContent= `showing tasks for  "${project.title}"`

    const btnCreateTask = createElementWithInfo("button","btnCreateTask");
    btnCreateTask.innerHTML="Create New Task";
    
    
    for(let i in project.tasksList){
      appendTask(project.tasksList[i]);
    }

    tasksHolder.prepend(btnCreateTask)
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
    `<p>create new task</p>
    <form name ="newTask"  >

    <label for="taskTitle">Title:</label><br>
    <input type="text" id="taskTitle" name="taskTitle" placeholder="Task Title"><br>

    <input type="date" id="taskDue" name="taskDue">

    <select id="taskPriority" name="taskPriority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="none">None</option>
    </select> 

    </form>`
  
    const save = createElementWithInfo("button","taskSave");
    save.innerHTML=`save`;
  
    
  
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