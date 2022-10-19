function TaskList() {
  this.listTask = [];
  this.findIndex = function (id) {
    for (var i = 0; i < this.listTask.length; i++) {
      if (Math.abs(this.listTask[i].id - id) < 1e-9) {
        return i;
      }
    }
    return -1;
  };
  this.addTask = function (newTodoTask) {
    this.listTask.push(newTodoTask);
  };
  this.deleteTask = function (index) {
    this.listTask.splice(index, 1);
  };
  this.getTaskById = function (idTask) {
    for (var i = 0; i < this.listTask.length; i++) {
      if (Math.abs(this.listTask[i].id - idTask) < 1e-9) {
        return this.listTask[i];
      }
    }
    return -1;
  };
  this.renderToDoTask = function (newTodoTask) {
    if (newTodoTask) {
      var cardToDoElement = document.querySelector(".todo#todo");
      cardToDoElement.innerHTML += `
          <li>
              <span>${newTodoTask.taskName}</span>
              <div class="buttons">
                  <button class="remove" data-index=${
                    this.listTask.length - 1
                  } data-id=${newTodoTask.id} data-status=${
        newTodoTask.status
      } onclick="deleteToDo(event)">
                      <i class="fa fa-trash-alt"></i>
                  </button>
                  <button class="edit" data-index=${
                    this.listTask.length - 1
                  } data-id=${newTodoTask.id} data-status=${
        newTodoTask.status
      } onclick="updateToDo(event)">
                  <i class="fa fa-edit"></i>
              </button>
                  <button class="complete" data-index=${
                    this.listTask.length - 1
                  } data-id=${newTodoTask.id} data-status=${
        newTodoTask.status
      } onclick="completeToDo(event)">
                      <i class="far fa-check-circle"></i>
                      <i class="fas fa-check-circle"></i>
                  </button>
              </div>
          </li>   
       `;
      document.querySelector("#newTask").value = "";
    } else {
      var cardToDoElement = document.querySelector(".todo#todo");
      cardToDoElement.innerHTML = "";
      for (var i = 0; i < this.listTask.length; i++) {
        cardToDoElement.innerHTML += `
          <li>
                <span>${this.listTask[i].taskName}</span>
                <div class="buttons">
                    <button class="remove" data-index=${i} data-id=${this.listTask[i].id} data-status=${this.listTask[i].status} onclick="deleteToDo(event)">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="edit" data-index=${i} data-id=${this.listTask[i].id} data-status=${this.listTask[i].status} onclick="updateToDo(event)">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="complete" data-index=${i} data-id=${this.listTask[i].id} data-status=${this.listTask[i].status} onclick="completeToDo(event)">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
            </li>   
        `;
      }
    }
    //setLocalStorage("todolist", JSON.stringify(this.listTask));
  };
  this.renderCompletedTask = function (newCompletedTask) {
    if (newCompletedTask) {
      var cardCompletedElement = document.querySelector(".todo#completed");
      cardCompletedElement.innerHTML += `
          <li>
              <span>${newCompletedTask.taskName}</span>
              <div class="buttons">
                  <button class="remove" data-id=${newCompletedTask.id} data-status=${newCompletedTask.status} onclick="deleteToDo(event)">
                      <i class="fa fa-trash-alt"></i>
                  </button>
                  <button class="complete" data-id=${newCompletedTask.id} data-status=${newCompletedTask.status} onclick="completeToDo(event)">
                      <i class="far fa-check-circle"></i>
                      <i class="fas fa-check-circle"></i>
                  </button>
              </div>
          </li>   
       `;
      document.querySelector("#newTask").value = "";
    } else {
      var cardCompletedElement = document.querySelector(".todo#completed");
      cardCompletedElement.innerHTML = "";
      for (var i = 0; i < this.listTask.length; i++) {
        cardCompletedElement.innerHTML += `
          <li>
                <span>${this.listTask[i].taskName}</span>
                <div class="buttons">
                    <button class="remove" data-index=${i} data-id=${this.listTask[i].id} data-status=${this.listTask[i].status} onclick="deleteToDo(event)">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="complete" data-index=${i} data-id=${this.listTask[i].id} data-status=${this.listTask[i].status} onclick="completeToDo(event)">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
            </li>   
        `;
      }
    }
    //setLocalStorage("completedlist", JSON.stringify(this.listTask));
  };

  this.updateTask = function (event) {};
}
