const inpt = document.querySelector(".input-add-task")
const inputTask = document.querySelector("ul");
const btnAdd = document.querySelector(".btn-add-task");

function addTaskToList (task){
    //adicionar uma task na lista
    const taskAdd = document.createElement("li"); //cria um novo li
    taskAdd.textContent = task;                   //define que o texto vai ser o task
    inputTask.appendChild(taskAdd);               //adiciona a task na lista ul

    //adicionar o botão delete ao lado da task na lista
    const btnDelete = document.createElement("button");  //cria um novo button
    btnDelete.textContent = "Remover";                   // o que terá neste button
    taskAdd.appendChild(btnDelete);                      //coloca o button ao lado da task na ul
}

// ao clicar no botão para adicionar uma task na lista
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();                       //evita o envio do formulário
    const task = inpt.value.trim();           // a task guarda o o que foi escrito no input


    addTaskToList(task);                    //chamada da função de adicionar a task na lista


});
