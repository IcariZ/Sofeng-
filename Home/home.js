const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === '') {
        alert("Please add something!");
    } else {
        const taskId = 'task-' + new Date().getTime();
        const li = document.createElement("li");
        li.id = taskId;
        li.innerHTML = inputBox.value;
        li.dataset.status = 'inProgress';
        li.dataset.timestamp = new Date().toISOString();
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateCounts();
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.dataset.status = e.target.classList.contains("checked") ? 'completed' : 'inProgress';
        updateCounts();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateCounts();
        saveData();
    }
}, false);

function saveData() {
    const tasks = [];
    listContainer.querySelectorAll('li').forEach(li => {
        tasks.push({
            id: li.id,
            content: li.innerHTML,
            status: li.dataset.status,
            timestamp: li.dataset.timestamp
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.id = task.id;
            li.innerHTML = task.content;
            li.dataset.status = task.status;
            li.dataset.timestamp = task.timestamp;
            if (task.status === 'completed') {
                li.classList.add('checked');
            }
            listContainer.appendChild(li);
        });
    }
    updateCounts();
}

function updateCounts() {
    const tasks = listContainer.querySelectorAll('li');
    const completedCount = document.getElementById('completedCount');
    const inProgressCount = document.getElementById('inProgressCount');
    const overdueCount = document.getElementById('overdueCount');

    let completed = 0;
    let inProgress = 0;
    let overdue = 0;

    tasks.forEach(task => {
        if (task.dataset.status === 'completed') {
            completed++;
        } else if (task.dataset.status === 'inProgress') {
            inProgress++;
        } else if (task.dataset.status === 'overdue') {
            overdue++;
        }
    });

    completedCount.textContent = completed;
    inProgressCount.textContent = inProgress;
    overdueCount.textContent = overdue;
}

showTasks();