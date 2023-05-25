var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add-item");
    addItem.onclick = main;
};
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    var isValid = true;
    var task = getInput("task").value;
    if (task == "") {
        isValid = false;
        alert("Task name is required!");
    }
    var dueDate = getInput("date").value;
    if (dueDate == "") {
        isValid = false;
        alert("Due date is required!");
    }
    return isValid;
}
function getToDoItem() {
    var myItem = new ToDoItem();
    var taskInput = getInput("task");
    myItem.task = taskInput.value;
    var dueDateInput = getInput("date");
    myItem.dueDate = new Date(dueDateInput.value);
    var remindersInput = getInput("reminder");
    myItem.reminders = remindersInput.value;
    var isCompleted = getInput("completion");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function getInput(id) {
    return document.getElementById(id);
}
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.task;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();
    var itemReminders = document.createElement("p");
    itemReminders.innerText = item.reminders;
    var itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete;
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }
}
function markAsComplete() {
    var itemDiv = this;
    itemDiv.classList.add("completed");
    var completeItems = document.getElementById("complete-items");
    completeItems.appendChild(itemDiv);
}
