// Array to store tasks
let tasks = [];

// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task by clicking button
addBtn.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(text);
    input.value = "";
    displayTasks();
});

// Add task by pressing Enter
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

// Function to show tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        // Tailwind for task LI
        li.classList.add(
            "bg-gray-100",
            "p-3",
            "rounded-lg",
            "mb-2",
            "flex",
            "justify-between",
            "items-center",
            "shadow",
            "cursor-pointer",
            "hover:bg-gray-200",
            "transition"
        );

        // toggle complete styling
        // li.addEventListener("click", function () {
        //     li.classList.toggle("line-through");
        //     li.classList.toggle("text-gray-500");
        // });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";

        // Tailwind for delete button
        delBtn.classList.add(
            "bg-red-500",
            "text-white",
            "px-3",
            "py-1",
            "rounded-md",
            "ml-3",
            "hover:bg-red-600",
            "transition"
        );

        delBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            tasks.splice(index, 1);
            displayTasks();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}
