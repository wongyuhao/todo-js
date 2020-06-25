import  {createElementWithInfo, appendChildren } from './util'
import ProjectsDOM from './ProjectsDOM'
import TasksDOM from './TasksDOM'

const DOMControl =(()=>{


  const pageLoad= (container)=>{
  
    const header = createHeaderDiv();
    const projectsDiv = ProjectsDOM.createProjectsDiv();
    const tasksDiv = TasksDOM.createTasksDiv();
    
    appendChildren(container, projectsDiv,tasksDiv);
    
  
  
  }

  const createHeaderDiv =()=>{
    const div = createElementWithInfo("div",'headerDiv');
    div.innerHTML=`<p>This is a place holder header</p>`

    const button = createElementWithInfo("button","savelocal");
    button.innerHTML="save to localstorage"

    const button2 = createElementWithInfo("button","loadlocal");
    button2.innerHTML="load from localstorage"

    div.appendChild(button)
    div.appendChild(button2)
    return div;
  }

 

  
  
  


  return{
    pageLoad,

  }
})();


export default DOMControl;