// Selecting necessary elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const listItem = document.createElement("li");

    // Task content
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear input
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});
