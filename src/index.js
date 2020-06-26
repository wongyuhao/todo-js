
import LogicControl from './Logic/LogicControl'
import DOMControl from './DOM/DOMControl'

import './styles/project.css'
import './styles/task.css'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faEdit,faTrashAlt,faSave,faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faCode,faPlus } from "@fortawesome/free-solid-svg-icons";


library.add(faEdit,faTrashAlt,faSave,faUserCircle,faCode,faPlus);
dom.watch();





const wrapper = document.querySelector("#wrapper");

DOMControl.pageLoad(wrapper);




const createProjBtn = document.querySelector("#btnCreateProject");
createProjBtn.addEventListener("click",LogicControl.newProject)




document.body.addEventListener( 'click', function ( event ) {
  if( event.srcElement.id == 'btnCreateTask' ) {
    
    LogicControl.newTask();
  };
}
);

document.body.addEventListener( 'click', function ( event ) {
    if( event.srcElement.id == 'projSave' ) {
        LogicControl.createProject();
    };
  }
);

document.body.addEventListener( 'click', function ( event ) {
    if( event.srcElement.className == 'projDelete') {
        LogicControl.deleteProject(event.srcElement.id);
    };
  }
);

document.body.addEventListener( 'click', function ( event ) {
    if( event.srcElement.className == 'projEdit') {
      LogicControl.editProject(event.srcElement.id);
    };
  }
);

document.body.addEventListener( 'click', function ( event ) {
  
  if( event.srcElement.classList.contains('projectClick'))
   {
    LogicControl.clearSelectedClass()
    event.srcElement.classList.add("selected");
    LogicControl.loadProject(event.srcElement.id);
  };
}
);


document.body.addEventListener( 'click', function ( event ) {
  if( event.srcElement.className == 'projectInfo') {

    console.log(`div of ${(event.target).parentNode.id} clicked`)
   LogicControl.loadProject((event.target).parentNode.id);
  };
}
);

document.body.addEventListener( 'click', function ( event ) {
  if( event.srcElement.className == 'taskDelete') {

    
      LogicControl.deleteTask((event.srcElement.id).split("-")[1]);
  };
}
);

document.body.addEventListener( 'click', function ( event ) {
  if( event.srcElement.id == 'taskSave' ) {
      LogicControl.addTask()
  };
}
);






window.onload=()=>{
  LogicControl.loadLocal();
}

window.onbeforeunload=LogicControl.saveLocal;