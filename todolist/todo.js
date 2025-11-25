let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let task = taskInput.value.trim();
    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="taskText">${task}</span>
        <button class="deleteBtn">X</button>
    `;

    // Mark as completed
    li.querySelector(".taskText").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
