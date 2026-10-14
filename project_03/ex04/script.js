
let totalTasks = 0;

const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const counter = document.getElementById('counter');


function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = text + " ";
    li.appendChild(taskSpan);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';

    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
        li.remove();
        totalTasks--;
        counter.textContent = totalTasks;
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    totalTasks++;
    counter.textContent = totalTasks;
    taskInput.value = "";
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', checkKey);
function checkKey(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}



