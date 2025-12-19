// 1. Select the elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('#todo-list');

// 2. Add an event listener to the button
todoButton.addEventListener('click', function(event) {
    // Stop the page from refreshing when clicking the button
    event.preventDefault();

    // Do nothing if the input is empty
    if (todoInput.value === "") return;

    // 3. Create a new <li> element
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    todoLi.innerText = todoInput.value;

    // 4. Stick the new task into the <ul> list
    todoList.appendChild(todoLi);

    // 5. Clear the input box for the next task
    todoInput.value = "";
});


