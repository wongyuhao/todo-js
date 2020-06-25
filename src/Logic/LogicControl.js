import ProjectsLogic from './ProjectsLogic'
import TasksDOM from '../DOM/TasksDOM'
import TasksLogic from './TasksLogic'
import ProjectsDOM from '../DOM/ProjectsDOM';
import Project from '../project';

const LogicControl = (()=>{
  let currentProject = null;
  
  const newProject = ()=>{
    ProjectsLogic.newProject();
  }

  const createProject = ()=>{
    ProjectsLogic.createProject();
    currentProject= ProjectsLogic.projectsList[0];
    TasksDOM.refreshTasks(currentProject);
  }

  const editProject = (pID)=>{
    ProjectsLogic.editProject(pID);
  }

  const loadProject =(pID)=>{
    console.log(`loading tasks of project ${pID}`);
    currentProject = ProjectsLogic.getProject(pID);
    console.log(currentProject)
    TasksDOM.refreshTasks(currentProject);
   
  }

  const deleteProject = (pID)=>{
    ProjectsLogic.deleteProject(event.srcElement.id)
    currentProject = ProjectsLogic.projectsList[0]||null;
    console.log(currentProject)
    TasksDOM.refreshTasks(currentProject);
  }

  const newTask=()=>{
    TasksLogic.newTask();
  }

  const addTask= ()=>{
    TasksLogic.createTask(currentProject);
    TasksDOM.refreshTasks(currentProject)
  }
  
  const deleteTask = (tID)=>{
    TasksLogic.deleteTask(currentProject,tID);
    TasksDOM.refreshTasks(currentProject);
  }
  

  const saveLocal = ()=>{
    localStorage.setItem("proj",JSON.stringify(ProjectsLogic.projectsList)) 

  }
  
  const loadLocal = ()=>{
    let raw = JSON.parse(localStorage.getItem("proj"));

    console.log("loading")
    console.table(raw)
  
    for (let i in raw){
      let temp = new Project(
          raw[i].title,
          raw[i].desc,
          raw[i].id,
          raw[i].created,
          raw[i].tasksList,
          raw[i].counter
          )
    ProjectsLogic.projectsList.push(temp);     
    }

    

    ProjectsDOM.refreshProjects(ProjectsLogic.projectsList);

    
  
  }

  return {
    newProject,
    createProject,
    editProject,
    loadProject,
    deleteProject,

    newTask,
    addTask,
    deleteTask,

    saveLocal,
    loadLocal
  }
  
})();



export default LogicControl;