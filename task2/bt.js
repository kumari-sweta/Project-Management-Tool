function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
      var task = document.createElement("li");
      task.innerHTML = '<span>' + taskInput.value + '</span><button onclick="removeTask(this)">Delete</button>';
      taskList.appendChild(task);
      taskInput.value = "";
    }
  }

  function removeTask(taskElement) {
    var taskList = document.getElementById("taskList");
    var task = taskElement.parentNode;
    taskList.removeChild(task);
  }