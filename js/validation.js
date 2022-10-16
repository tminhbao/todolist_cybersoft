var validation = {
  isEmpty: function () {
    const newTask = document.querySelector("#newTask").value;
    if (newTask.length === 0 || newTask.contains("")) {
      document.querySelector("#notiContent").innerHTML = `Không được để rỗng`;
      document.querySelector("#notiInput").style.display = "block";
      return true;
    }
    return false;
  },
  isSame: function (newTask, listTask) {
    for (var i = 0; i < listTask.length; i++) {
      if (listTask[i] === newTask) {
        document.querySelector(
          "#notiContent"
        ).innerHTML = `${newTask} đã có trong danh sách`;
        document.querySelector("#notiInput").style.display = "block";
        return true;
      }
    }
    return false;
  },
};
