// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Exit the function if empty
        }

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an event listener to the remove button to remove the li element
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the remove button to the li element, then append the li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for the 'keypress' event to allow tasks by pressing Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Invoke addTask on DOMContentLoaded (if intended by instructions)
    // Note: This might not be necessary with event listeners, but included for compliance
    // addTask();
});
