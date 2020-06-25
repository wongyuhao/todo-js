
import ProjectsDOM from '../DOM/ProjectsDOM';
import Project from '../project';

const ProjectsLogic = (()=>{

  
  let projectsList = [];

  const newProject = ()=>{
    console.log("new project called")
    if(document.querySelector("#newProject")){
      alert("finish creating your existing project!")
      return
    }else{
      ProjectsDOM.projNew();
    }
    
  }


  const createProject=()=>{
    
    console.log("create project called")

    
    let temp = new Project(
      document.forms["newProject"]["projTitle"].value || `My Project ${projectsList.length}`,
      document.forms["newProject"]["projDescription"].value,
      `p${projectsList.length}`,
      Date.now()
    )

    
    
    projectsList.unshift(temp);
    
    ProjectsDOM.refreshProjects(projectsList);

  }

  const deleteProject =(divID)=>{
    
    let id = divID.split("-")[1];
    console.log(`deleting ${id}`)
    for (let i in projectsList){
      if (projectsList[i].id==id){
        projectsList.splice(i,1);
      }
    }

    ProjectsDOM.refreshProjects(projectsList);
    
  }

  const getProjectPos = (divID)=>{
    let id = divID.split("-")[1];
    for (let i in projectsList){
      if (projectsList[i].id==id){
        return i;
      }
    }
    alert(`${divID} not found in project list`)
  }



  const getProject = (id)=>{
   for (let i in projectsList){
      if (projectsList[i].id==id){
        return projectsList[i];
      }
    }
    alert(`${divID} not found in project list`)
    return false;
  }
  const editProject = (id)=>{
    
    console.log(`editing existing proj. ${id}`);
    let position = getProjectPos(id);

    ProjectsDOM.projEdit(projectsList[position]);
    document.forms["editProject"]["projTitle"].value = projectsList[position].title;
    document.forms["editProject"]["projDescription"].value = projectsList[position].desc;
    const saveEdit = document.querySelector("#projSaveEdit");
    saveEdit.addEventListener("click",function(){

      projectsList[position].title = document.forms["editProject"]["projTitle"].value;
      projectsList[position].desc = document.forms["editProject"]["projDescription"].value;
      ProjectsDOM.refreshProjects(projectsList);
    })

  }

  return{
    newProject,
    deleteProject,
    createProject,
    editProject,
    getProject,
    projectsList

   
  }








})();

export default ProjectsLogic