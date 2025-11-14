document.querySelector("#addBtn").addEventListener("click", addTask);

function addTask() {
    const taskText = document.querySelector("#taskInput").value;

    if (taskText.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Create task list item
    const li = document.createElement("li");
    li.className = "task";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    // Add text & delete button to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append to list
    document.querySelector("#taskList").appendChild(li);

    // Clear input field
    document.querySelector("#taskInput").value = "";

    // Toggle completed on click
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}
