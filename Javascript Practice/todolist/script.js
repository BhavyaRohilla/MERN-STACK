"use strict";

const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    // Toggle complete on click
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggling
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) {
    alert("Please enter a task.");
    return;
  }
  tasks.push({ text: taskText, completed: false });
  saveTasks();
  renderTasks();
  input.value = "";
});

renderTasks(); // initial load
