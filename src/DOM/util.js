const createElementWithInfo = (tp,id,...classes)=>{
  let temp = document.createElement(tp);
  if(id!==null){
    temp.setAttribute("id",id);
  }
  if(classes!==null){
    for(let i in classes ){
      temp.classList.add(classes[i]);
    }
  }

  return temp;
}

const appendChildren = (target, ...children) =>{
  for (let i in children){
    target.appendChild(children[i]);
  }
}

export { createElementWithInfo, appendChildren};