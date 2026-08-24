const taskList = document.querySelector("ul");
const addTaskForm = document.querySelector("#add-task");
const addTaskInput = document.querySelector("#add-task input");
const findTaskForm = document.querySelector("#find-task");

let number = 2;


function createTask(taskName, completed) {

    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");
    const newSpan = document.createElement("span");

    newInput.type = "checkbox";
    newInput.id = "task" + number;

    newLabel.htmlFor = "task" + number;
    newLabel.textContent = taskName;

    newInput.checked = completed;

    newSpan.className = "delete";
    newSpan.textContent = "delete";

    newLi.appendChild(newInput);
    newLi.appendChild(newLabel);
    newLi.appendChild(newSpan);

    taskList.appendChild(newLi);

    number++;
}


function saveTasks() {

    const tasks = [];

    taskList.querySelectorAll("li").forEach((task) => {

        const checkbox = task.querySelector("input");
        const label = task.querySelector("label");

        tasks.push({
            name: label.textContent,
            completed: checkbox.checked
        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach((task) => {
        createTask(task.name, task.completed);
    });
}


addTaskForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const taskName = addTaskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskName, false);

    saveTasks();

    addTaskInput.value = "";
});


taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();

        saveTasks();
    }
});


taskList.addEventListener("change", (event) => {

    if (event.target.type === "checkbox") {

        saveTasks();
    }
});


findTaskForm.addEventListener("input", (event) => {

    const searchString = event.target.value.toLowerCase();

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach((task) => {

        const taskSearch = task
            .querySelector("label")
            .textContent
            .toLowerCase();

        if (taskSearch.includes(searchString)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }

    });
});


loadTasks();