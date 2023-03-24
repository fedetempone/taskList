const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const tipoDeTarea = document.getElementById("elegirTipoDeTarea");

addBtn.addEventListener("click", (e)=>{

e.preventDefault();
const text = input.value;

if (text !== "" && tipoDeTarea.value === 'tipo1'){
  
  const li = document.createElement("li");
  const p = document.createElement("p");
  const parrafoAlerta = document.createElement("p");

  p.textContent = text;
  li.classList.add('liAlertaUrgente');
  parrafoAlerta.classList.add('parrafoAlertaUrgente');
  parrafoAlerta.textContent = 'URGENTE';

  li.appendChild(p);
  li.appendChild(parrafoAlerta);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  input.value = "";
  empty.style.display = "none";

}else if (text !== "" && tipoDeTarea.value === 'tipo2'){
  const li = document.createElement("li");
  const p = document.createElement("p");
  const parrafoAlerta = document.createElement("p");

  p.textContent = text;
  p.textContent = text;
  li.classList.add('liAlertaModerado');
  parrafoAlerta.classList.add('parrafoAlertaModerado');
  parrafoAlerta.textContent = 'MODERADO';

  li.appendChild(p);
  li.appendChild(parrafoAlerta);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  input.value = "";
  empty.style.display = "none";
}
else if (text !== "" && tipoDeTarea.value === 'tipo3'){
  const li = document.createElement("li");
  const p = document.createElement("p");
  const parrafoAlerta = document.createElement("p");

  p.textContent = text;
  p.textContent = text;
  li.classList.add('liAlertaPuedeEsperar');
  parrafoAlerta.classList.add('parrafoAlertaPuedeEsperar');
  parrafoAlerta.textContent = 'Puede Esperar';

  li.appendChild(p);
  li.appendChild(parrafoAlerta);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  input.value = "";
  empty.style.display = "none";
}
else{
  alert('Debes Ingresar una Tarea y una Prioridad');
}

}); 

function addDeleteBtn () {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e)=>{
  
    const item = e.target.parentElement;
    
    ul.removeChild(item);
    
    const items = document.querySelectorAll("li");
    
    if(items.length === 0) {
                              empty.style.display = "block"
}
  });
 
  return deleteBtn;

}

