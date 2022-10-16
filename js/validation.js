var validation = {
  isEmpty: function (newTask) {
    if (newTask !== "") {
      return false;
    }
    document.querySelector("#notiContent").innerHTML = `Không được để rỗng`;
    document.querySelector("#notiInput").style.display = "block";
    document.querySelector("#notiContent").style.display = "block";
    return true;
  },
  isSame: function (newTask, listTask) {
    if (listTask.length === 0) {
      return false;
    } else {
      for (var i = 0; i < listTask.length; i++) {
        if (newTask === listTask[i].taskName) {
          document.querySelector(
            "#notiContent"
          ).innerHTML = `${newTask} đã có trong danh sách`;
          document.querySelector("#notiInput").style.display = "block";
          document.querySelector("#notiContent").style.display = "block";
          return true;
        }
      }
    }
    return false;
  },
};
