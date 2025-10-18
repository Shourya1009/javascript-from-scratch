const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.classList.toggle("completed", todo.completed);

    // Toggle completion on click
    li.addEventListener("click", () => toggleComplete(index));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle when deleting
      deleteTodo(index);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = input.value.trim();
  if (text === "") return alert("Please enter a task!");

  todos.push({ text, completed: false });
  input.value = "";
  updateLocalStorage();
  renderTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  updateLocalStorage();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  updateLocalStorage();
  renderTodos();
}

function clearTodos() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    todos = [];
    updateLocalStorage();
    renderTodos();
  }
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Event Listeners
addBtn.addEventListener("click", addTodo);
clearBtn.addEventListener("click", clearTodos);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

// Initialize app
renderTodos();
