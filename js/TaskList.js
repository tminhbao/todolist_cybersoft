function TaskList() {
  this.listTask = [];
  this.findIndex = function (id) {
    for (var i = 0; i < this.listTask.length; i++) {
      if (this.listTask[i].id === id) {
        return i;
      }
    }
  };
  this.addTask = function (newTodoTask) {
    this.listTask.push(newTodoTask);
  };
  this.deleteTask = function (index) {
    this.listTask.splice(index, 1);
  };
  this.getTaskById = function (idTask) {
    return this.listTask.forEach((task) => task.id === idTask);
  };
  this.renderTask = function (newTodoTask) {
    // Thẻ UL
    var cardToDoElement = document.querySelector(".todo#todo");
    cardToDoElement.innerHTML += `
        <li>
            <span>${newTodoTask.taskName}</span>
            <div class="buttons">
                <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo(event)">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" data-index="0" data-status="todo" onclick="completeToDo(event)">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>   
     `;
    document.querySelector("#newTask").value = "";
  };
  this.updateTask = function (event) {};
}
