import  {createElementWithInfo, appendChildren } from './util'
import ProjectsDOM from './ProjectsDOM'
import TasksDOM from './TasksDOM'

const DOMControl =(()=>{


  const pageLoad= (container)=>{
  
    const header = createHeaderDiv();
    const projectsDiv = ProjectsDOM.createProjectsDiv();
    const tasksDiv = TasksDOM.createTasksDiv();
    
    document.body.insertBefore(header,container);
    appendChildren(container, projectsDiv,tasksDiv);
    
  
  
  }

  const createHeaderDiv =()=>{
    const div = createElementWithInfo("div",'headerDiv');
    const title = document.createElement("h1")
    title.textContent = "ToDuit 💸"

    const tagline = document.createElement("h2")
    tagline.textContent="Get Productive, Earn Duit"

    const links =createElementWithInfo("ul","headerLinks")
    const code = document.createElement("li");
    code.innerHTML="<a href='https://www.github.com/wongyuhao/todo-js'><i class='fas fa-code'></i></a>" 
    const about = document.createElement("li");
    about.innerHTML="<a href='https://www.haoyudoing.com/about'><i class='far fa-user-circle'></i></a>"
    appendChildren(links,code,about)
    appendChildren(div,title,tagline,links)
    return div;
  }

 

  
  
  


  return{
    pageLoad,

  }
})();


export default DOMControl;