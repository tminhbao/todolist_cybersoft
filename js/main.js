var todoList = new TaskList();
var completedList = new TaskList();

// ADD TASK
document.querySelector("#addItem").onclick = function () {
  // Create a new task
  var newTodoTask = new Task();
  newTodoTask.id = Math.random();
  newTodoTask.taskName = document.querySelector("#newTask").value.trim();
  newTodoTask.status = "todo";

  // Validation
  var isEmptyCheck = validation.isEmpty(newTodoTask.taskName);
  var isSameCheck = validation.isSame(newTodoTask.taskName, todoList.listTask);

  // Push task to the todolist
  if (isEmptyCheck || isSameCheck) {
    return;
  } else if (isEmptyCheck === false && isSameCheck == false) {
    document.querySelector("#notiContent").style.display = "none";
    document.querySelector("#notiInput").style.display = "none";
    todoList.addTask(newTodoTask);
  }

  // Render todoList
  todoList.renderToDoTask(newTodoTask);
};

// DELETE TASK
// Delete todolist
function deleteToDo(event) {
  const currentIndex = event.target.parentElement.getAttribute("data-index");
  const currentStatus = event.target.parentElement.getAttribute("data-status");
  if (currentStatus === "todo") {
    todoList.deleteTask(currentIndex);
    todoList.renderToDoTask(null);
  }
}

// CHANGE STATUS
function completeToDo(event) {
  const currentIndex = event.target.parentElement.getAttribute("data-index");
  const currentStatus = event.target.parentElement.getAttribute("data-status");
  if (currentStatus === "todo") {
    todoList.listTask[currentIndex].status = "complete";
    completedList.addTask(todoList.listTask[currentIndex]);
    todoList.deleteTask(currentIndex);
    todoList.renderToDoTask(null);
    completedList.renderCompletedTask(null);
  } else if (currentStatus === "complete") {
    completedList.listTask[currentIndex].status = "todo";
    todoList.addTask(completedList.listTask[currentIndex]);
    completedList.deleteTask(currentIndex);
    completedList.renderCompletedTask(null);
    todoList.renderToDoTask(null);
  }
}

// CREATE TABLE

// SETLOCALSTORAGE

// GETLOCALSTORAGE
