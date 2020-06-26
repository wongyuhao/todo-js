import  {createElementWithInfo, appendChildren } from './util'

const ProjectsDOM=(()=>{

const createProjectsDiv = ()=>{
  const div= createElementWithInfo("div","projectsDiv");
  const btnDiv = createElementWithInfo("div","btnDivCreate")
  const btnCreateProject = createElementWithInfo("button","btnCreateProject");
  btnCreateProject.innerHTML="New Project";

  btnDiv.appendChild(btnCreateProject)

  const projectsHolder = createElementWithInfo("div","projectsHolder");

  appendChildren(div,btnDiv,projectsHolder);
  return div;
}

const projNew=()=>{
  const projectsHolder = document.getElementById("projectsHolder");
  
  
  
  const holder = createElementWithInfo("div","newProject","project");

  

  holder.innerHTML=
  `
  <form name ="newProject"  >
 
  <input type="text" id="projTitle" name="projTitle" placeholder="Project Title">
  <label for="projTitle"></label>
  <input type="text" id="projDescription" name="projDescription" placeholder ="Description"><br>
  <label for="projDescription"></label>
  </form>`

  const save = createElementWithInfo("button","projSave");
  save.innerHTML=`<i class="far fa-save"></i>`;

  

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
  `
  <form name ="editProject" >
  <label for="projTitle"></label>
  <input type="text" id="projTitle" name="projTitle">
  <label for="projDescription"></label>
  <input type="text" id="projDescription" name="projDescription" placeholder="Add a description">
  </form>`

  

  const save = createElementWithInfo("button","projSaveEdit");
  save.innerHTML=`<i class="far fa-save"></i>`;

  

  appendChildren(holder,save)
  projectsHolder.insertBefore(holder,parent);
}

const appendProject=(project)=>{
  console.log("appending...")
  const projectsHolder = document.getElementById("projectsHolder");
  
  
  const holder = createElementWithInfo("div",project.id,"project","projectClick");

  

  const title = createElementWithInfo("p",null,"projectInfo","projectTitle");
  title.innerHTML=`${project.title}`;
  
  const desc = createElementWithInfo("p",null,"projectInfo","projectDesc");
  if(project.desc!=""){
    desc.innerHTML = `${project.desc}`;
  }

  const created = createElementWithInfo("p",null,"projectInfo","projectTime");
  created.innerHTML=`${project.created}`
  


  const edit = createElementWithInfo("button",`edit-${project.id}`,"projEdit");
  edit.innerHTML=`<i class="far fa-edit"></i>`;

  const del = createElementWithInfo("button",`del-${project.id}`,"projDelete");
  del.innerHTML=`<i class="far fa-trash-alt"></i>`;

  const info = createElementWithInfo("div",null,"projInfoDiv")
  appendChildren(info,title,desc,created)


  appendChildren(holder,info,edit,del);
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