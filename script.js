const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];
function renderElements(arrObject) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for(let i = 0; i < arrObject.length; i++) {
    const follow = createTaskItem(arrObject[i]);
    ul.append(follow);
  }
   
  return ul;
}
renderElements(tasks);

function createTaskItem (object) {
  const liItem = document.createElement("li");
  const divItem = document.createElement("div");
  const spanItem = document.createElement("span");
  const pItem = document.createElement("p");
  const buttonItem = document.createElement("button");

  liItem.classList.add("task__item");
  divItem.classList.add("task-info__container");
  pItem.innerText = object.title;
  buttonItem.classList.add("task__button--remove-task");
  spanItem.classList.add("task-type");

  if (object.type.toLowerCase() == "urgente") {
    spanItem.classList.add("span-urgent");
  }
  else if (object.type.toLowerCase() == "importante") {
    spanItem.classList.add("span-important");
  }
  else {
    spanItem.classList.add("span-normal");
  }

  divItem.append(spanItem, pItem);
  liItem.append( divItem, buttonItem);

  buttonItem.addEventListener("click", function() {
    const index = tasks.indexOf(object);
    tasks.splice(index, 1);
    renderElements(tasks);
  })
  return liItem;
}

function currentTask () {
  const btnAddTask = document.querySelector(".form__button--add-task");

    btnAddTask.addEventListener("click", function(event) {
    event.preventDefault();
    
    const includeTask = document.querySelector(".form__input--text");
    const choiceTask = document.querySelector(".form__input--priority");

    let listTask = {
      title: includeTask.value,
      type: choiceTask.value
    };

    tasks.push(listTask);

    renderElements(tasks);
  })
}
currentTask();