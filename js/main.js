var todoList = new TaskList();
var completeList = new TaskList();

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

  todoList.addTask(newTodoTask);

  // Render todoList
  todoList.renderTask(newTodoTask);
};

// CHANGE STATUS

// CREATE TABLE

// SETLOCALSTORAGE

// GETLOCALSTORAGE
