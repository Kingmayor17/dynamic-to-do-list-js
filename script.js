document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create li
        const li = document.createElement('li');

        // Add the task text directly (no span)
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task on click
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Add button click
    addButton.addEventListener('click', addTask);

    // Listen for "Enter" keypress — using keydown for compatibility
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
