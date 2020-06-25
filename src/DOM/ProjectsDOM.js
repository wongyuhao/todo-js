import  {createElementWithInfo, appendChildren } from './util'

const ProjectsDOM=(()=>{

const createProjectsDiv = ()=>{
  const div= createElementWithInfo("div","projectsDiv");
  const btnCreateProject = createElementWithInfo("button","btnCreateProject");
  btnCreateProject.innerHTML="Create New Project";



  const projectsHolder = createElementWithInfo("div","projectsHolder");

  appendChildren(div,btnCreateProject,projectsHolder);
  return div;
}

const projNew=()=>{
  const projectsHolder = document.getElementById("projectsHolder");
  
  
  
  const holder = createElementWithInfo("div","newProject","project");

  

  holder.innerHTML=
  `<p>create new project</p>
  <form name ="newProject"  >
  <label for="projTitle">Title:</label><br>
  <input type="text" id="projTitle" name="projTitle" placeholder="Project Title"><br>
  <label for="projDescription">Description:</label><br>
  <input type="text" id="projDescription" name="projDescription" placeholder ="Description"><br>
  </form>`

  const save = createElementWithInfo("button","projSave");
  save.innerHTML=`save`;

  

  appendChildren(holder,save)
  projectsHolder.prepend(holder);
}

const projEdit=(project)=>{
  const projectsHolder = document.getElementById("projectsHolder");
 
  
  if(document.querySelector("#editProject")){
    alert("finish editing your existing project!")
    return
  }
  
  const holder = createElementWithInfo("div","editProject","project");
  const parent = document.querySelector(`#${project.id}`);
  parent.style["display"]="none";

  
  holder.innerHTML=
  `<p>edit exisiting project</p>
  <form name ="editProject" >
  <label for="projTitle">Title:</label><br>
  <input type="text" id="projTitle" name="projTitle"><br>
  <label for="projDescription">Description:</label><br>
  <input type="text" id="projDescription" name="projDescription"><br>
  </form>`

  

  const save = createElementWithInfo("button","projSaveEdit");
  save.innerHTML=`save edit`;

  

  appendChildren(holder,save)
  projectsHolder.insertBefore(holder,parent);
}

const appendProject=(project)=>{
  console.log("appending...")
  const projectsHolder = document.getElementById("projectsHolder");
  
  
  const holder = createElementWithInfo("div",project.id,"project","projectClick");

  

  const title = createElementWithInfo("p",null,"projectInfo");
  title.innerHTML=`Title:${project.title}`;
  
  const desc = createElementWithInfo("p",null,"projectInfo");
  if(project.desc!=""){
    desc.innerHTML = `Description: ${project.desc}`;
  }

  const created = createElementWithInfo("p",null,"projectInfo");
  created.innerHTML=`Time created: ${project.created}`
  
  const tasks = createElementWithInfo("p",null,"projectInfo");
  tasks.innerHTML=`Tasks: ${project.tasksList.length}`

  const edit = createElementWithInfo("button",`edit-${project.id}`,"projEdit");
  edit.innerHTML=`edit project`;

  const del = createElementWithInfo("button",`del-${project.id}`,"projDelete");
  del.innerHTML=`delete project`;

  
  

  appendChildren(holder,title,desc,tasks,created,edit,del);
  appendChildren(projectsHolder,holder);

  

}



const refreshProjects = (projectsList)=>{
  const projectsHolder = document.getElementById("projectsHolder");
  projectsHolder.innerHTML=``;
  for(let i in projectsList){
    appendProject(projectsList[i]);
  }
}

return{
  createProjectsDiv,
  projNew,
  projEdit,
  refreshProjects
}


})();

export default ProjectsDOM