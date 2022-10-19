var todoList = new TaskList();
var completedList = new TaskList();

var todoListTaskArray = getLocalStorage("todoList");
var completedListTaskArray = getLocalStorage("completedList");

todoList.listTask = todoListTaskArray.listTask || [];
completedList.listTask = completedListTaskArray.listTask || [];

window.onload = function () {
  todoList.renderToDoTask(null);
  completedList.renderCompletedTask(null);
};

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
  setLocalStorage("todoList", JSON.stringify(todoList));
  setLocalStorage("completedList", JSON.stringify(completedList));
};

// DELETE TASK
// Delete todolist
function deleteToDo(event) {
  const currentIndex = event.target.parentElement.getAttribute("data-index");
  const currentStatus = event.target.parentElement.getAttribute("data-status");
  if (currentStatus === "todo") {
    todoList.deleteTask(currentIndex);
    todoList.renderToDoTask(null);
  } else if (currentStatus === "complete") {
    completedList.deleteTask(currentIndex);
    completedList.renderCompletedTask(null);
  }
  setLocalStorage("todoList", JSON.stringify(todoList));
  setLocalStorage("completedList", JSON.stringify(completedList));
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
  setLocalStorage("todoList", JSON.stringify(todoList));
  setLocalStorage("completedList", JSON.stringify(completedList));
}

// CREATE TABLE
// Render ÚI

// SETLOCALSTORAGE
function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

// GETLOCALSTORAGE

function getLocalStorage(name) {
  if (name === "todoList") {
    const todoTaskList = JSON.parse(localStorage.getItem("todoList"));
    return todoTaskList;
  } else if (name === "completedList") {
    const completedTaskList = JSON.parse(localStorage.getItem("completedList"));
    return completedTaskList;
  }
}

// UPDATE TASK
function updateToDo(event) {
  const currentIndex = event.target.parentElement.getAttribute("data-index");
  const currentStatus = event.target.parentElement.getAttribute("data-status");
  const currentId = event.target.parentElement.getAttribute("data-id");
  const deleteTask = todoList.getTaskById(currentId);
  document.querySelector("#newTask").value = deleteTask.taskName;
  todoList.deleteTask(currentId);
  todoList.renderToDoTask(null);
  setLocalStorage("todoList", JSON.stringify(todoList));
}
