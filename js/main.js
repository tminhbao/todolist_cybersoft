// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();

// today = dd + "/" + mm + "/" + yyyy;
// console.log(today);
// document.querySelector(".card-day").innerHTML = today;

// ADD TASK
var cardToDoElement = document.querySelector(".todo#todo");
var listTask = [];

document.querySelector("#addItem").onclick = function () {
  var newTask = document.querySelector("#newTask").value;
  var isCheck = true;
  isCheck = validation.isEmpty() & validation.isSame(newTask, listTask);

  if (isCheck === false) {
    listTask.push(newTask);
    const liToDoTask = document.createElement("li");
    liToDoTask.innerHTML = `
        <span>${newTask}</span>
        <div class="buttons">
            <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo(event)">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" data-index="0" data-status="todo" onclick="completeToDo(event)">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
        `;
    cardToDoElement.appendChild(liToDoTask);
    document.querySelector("#newTask").value = "";
  }
};
