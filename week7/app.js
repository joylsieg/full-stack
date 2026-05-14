// Task Manager - Complete Implementation

// State (store tasks as objects)
let tasks = [
    // { id: 1, text: 'Learn DOM', priority: 'high', completed: false }
];
let currentFilter = 'all';
let isDarkMode = false;

// DOM Elements (select once, use everywhere)
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');
const themeToggle = document.getElementById('theme-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');

// 1. Add Task (form submit)
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const task = {
        id: Date.now(),  // Unique ID using timestamp
        text: taskInput.value.trim(),
        priority: prioritySelect.value,
        completed: false
    };
    
    tasks.push(task);
    taskInput.value = '';  // Clear input
    renderTasks();
});

// 2. Render Tasks to DOM
function renderTasks() {
    // Filter tasks based on currentFilter
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;  // 'all'
    });
    
    // Clear the list
    taskList.innerHTML = '';
    
    // Build task elements
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority}`;
        if (task.completed) li.classList.add('completed');
        li.dataset.id = task.id;
        
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <span class="task-priority">${task.priority}</span>
            <button class="delete-btn">✕</button>
        `;
        
        taskList.appendChild(li);
    });
    
    // Update task count
    const activeTasks = tasks.filter(t => !t.completed).length;
    taskCount.textContent = `${activeTasks} task${activeTasks !== 1 ? 's' : ''} remaining`;
}

// 3. Toggle Task Completion (event delegation on the list!)
taskList.addEventListener('click', (event) => {
    const taskItem = event.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = Number(taskItem.dataset.id);
    
    // Toggle checkbox
    if (event.target.classList.contains('task-checkbox')) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = event.target.checked;
            renderTasks();
        }
    }
    
    // Delete button
    if (event.target.classList.contains('delete-btn')) {
        tasks = tasks.filter(t => t.id !== taskId);
        renderTasks();
    }
});

// 4. Filter Tasks
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// 5. Clear Completed
clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
});

// 6. Theme Toggle
themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
});

// Load theme preference on startup
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
}

// Initial render
renderTasks();