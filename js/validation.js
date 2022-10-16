var validation = {
  isEmpty: function () {
    const newTask = document.querySelector("#newTask").value.trim();
    if (newTask === "") {
      document.querySelector("#notiContent").innerHTML = `Không được để rỗng`;
      document.querySelector("#notiInput").style.display = "block";
      return true;
    }
    //document.querySelector("#notiInput").style.display = "none";
    return false;
  },
  isSame: function (newTask, listTask) {
    if (listTask.length === 0) {
      //document.querySelector("#notiInput").style.display = "none";
      return false;
    } else {
      for (var i = 0; i < listTask.length; i++) {
        if (newTask === listTask[i]) {
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
