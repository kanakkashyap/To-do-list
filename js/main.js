const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // 1. Create a new list item (li)
        let li = document.createElement("li");
        
        // 2. Set its content to the input text
        li.innerHTML = inputBox.value;
        
        // 3. Put the new li inside our list container
        listContainer.appendChild(li);

        // 4. Add a delete button (x) to the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    
    // Clear the input box after adding
    inputBox.value = "";
    saveData();
}

// Logic to delete a task when clicking the 'x'
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Local Storage so your list stays after refresh
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
