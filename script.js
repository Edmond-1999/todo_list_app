const addTaskForm = document.querySelector("#add-task");
const addTaskInput = document.querySelector("#add-task input");
const findTaskForm = document.querySelector("#find-task");
const taskList = document.querySelector("ul");

taskList.addEventListener("click", (event) => {
    console.log(event);
    if(event.target.className == "delete"){
        event.target.parentElement.remove();
    }
})


addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let number = 2;

    const taskName = addTaskInput.ariaValueMax.trim();

    if(taskName === ""){
        alert("Please enter a task!");
        return;
    }

    const newLi = document.createElement("li");
    const newLabel = document.createElement("label")
    const newSpan = document.createElement("span");

    newLabel.forName = "task" + number++;
    newLabel

})