var todoList = new TaskList();
var completedList = new TaskList();
var newTodoTask = new Task();
// ADD TASK
document.querySelector("#addItem").onclick = function () {
  var newTask = document.querySelector("#newTask").value.trim();
  //console.log("newTask: " + newTask);
  var isEmptyCheck = validation.isEmpty(newTask);
  var isSameCheck = validation.isSame(newTask, todoList.listTask);

  if (isEmptyCheck || isSameCheck) {
    return;
  } else if (isEmptyCheck === false && isSameCheck == false) {
    document.querySelector("#notiContent").style.display = "none";
    document.querySelector("#notiInput").style.display = "none";
    todoList.addTask(newTask);
  }
  todoList.renderTask(newTask);
};

// CHANGE STATUS

// CREATE TABLE

// SETLOCALSTORAGE

// GETLOCALSTORAGE
