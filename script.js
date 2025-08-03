// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents saving to Local Storage during load
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Get and trim the input value if taskText is not provided (i.e., called from UI)
        const text = taskText || taskInput.value.trim();

        // Check if the input is empty
        if (text === '') {
            alert('Please enter a task');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = text;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add click event listener to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
            // Update Local Storage after removal
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== text);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to list item and list item to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // If called from UI (not loadTasks), clear the input field and save to Local Storage
        if (save) {
            taskInput.value = '';
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add event listener to the Add Task button
    addButton.addEventListener('click', () => addTask());

    // Add event listener for Enter key press in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
