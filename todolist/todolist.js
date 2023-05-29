document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value;
      if (todoText !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        
        span.innerHTML = todoText;
        
        span.addEventListener("click", function() {
          span.classList.toggle("completed");
        });
        
        li.appendChild(span);
        todoList.appendChild(li);
        
        todoInput.value = "";
      }
    });
  });
  