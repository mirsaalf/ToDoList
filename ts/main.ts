class ToDoItem {
    task:string;
    dueDate:Date;
    reminders:string;
    isCompleted:boolean;
}

/*
let item = new ToDoItem();
item.task = "Testing";
item.dueDate = new Date(2023, 5, 1);
item.reminders = "test";
item.isCompleted = false; 
*/ 

window.onload = function() {
    let addItem = document.getElementById("add-item");
    addItem.onclick = main;
}

function main() {
    if(isValid()) {
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

/**
 * Check if form data is valid 
 */
function isValid():boolean {
    let isValid = true;

    let task = getInput("task").value;
    if (task == "") {
        isValid = false;
        alert("Task name is required!");
    }

    let dueDate = getInput("date").value;
    if (dueDate == "") {
        isValid = false;
        alert("Due date is required!");
    }

    return isValid;
}

/**
 * Get all input off form and wrap in a to-do item object
 */
function getToDoItem():ToDoItem {
    let myItem = new ToDoItem();

    let taskInput = getInput("task");
    myItem.task = taskInput.value;

    let dueDateInput = getInput("date");
    myItem.dueDate = new Date(dueDateInput.value);

    let remindersInput = getInput("reminder");
    myItem.reminders = remindersInput.value;

    let isCompleted = getInput("completion");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

function getInput(id):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * Display given to-do item on the web page
 */
function displayToDoItem(item:ToDoItem):void {
    let itemText = document.createElement("h3");
    itemText.innerText = item.task;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();

    let itemReminders = document.createElement("p");
    itemReminders.innerText = item.reminders;

    let itemDiv = document.createElement("div");

    itemDiv.onclick = markAsComplete;

    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if (item.isCompleted) {
        let completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else {
        let incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }
}

function markAsComplete() {
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");

    let completeItems = document.getElementById("complete-items");
    completeItems.appendChild(itemDiv);
}