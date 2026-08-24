const taskList = document.querySelector("ul");
const addTaskForm = document.querySelector("#add-task");
const addTaskInput = document.querySelector("#add-task input");
const findTaskForm = document.querySelector("#find-task");

let number = 2;

taskList.addEventListener("click", (event) => {
    // console.log(event);
    if(event.target.className == "delete"){
        event.target.parentElement.remove();
    }
});


addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = addTaskInput.value.trim();

    if(taskName === ""){
        alert("Please enter a task!");
        return;
    }

    const newLi = document.createElement("li");
    const newInput = document.createElement("input")
    const newLabel = document.createElement("label")
    const newSpan = document.createElement("span");

    newInput.type = "checkbox";
    newInput.id = "task" + number;

    newLabel.htmlFor = "task" + number;
    newLabel.textContent = taskName;

    newSpan.className = "delete";
    newSpan.textContent = "delete";


    newLi.appendChild(newInput)
    newLi.appendChild(newLabel);
    newLi.appendChild(newSpan);
    taskList.appendChild(newLi);


    number++;
    
    
    addTaskInput.value = "";

});

findTaskForm.addEventListener("input", (event) => {
    event.preventDefault();


    const searchString = event.target.value.toLowerCase();

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach((task) => {
        const taskSearch = task.querySelector("label").textContent.toLowerCase();

        if(taskSearch.includes(searchString)){
            task.style.display = "";
        }
        else{
            task.style.display = "none";
        }
    });
})