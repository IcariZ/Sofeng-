document.addEventListener('DOMContentLoaded', () => {
    const totalTasksElement = document.getElementById('total-tasks');
    const productiveDayElement = document.getElementById('productive-day');
    const averageTasksElement = document.getElementById('average-tasks');

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const tasksPerDay = [0, 0, 0, 0, 0, 0, 0];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    tasks.forEach(task => {
        const date = new Date(task.timestamp);
        const day = date.getDay();
        if (task.status === 'completed') {
            tasksPerDay[day]++;
        }
    });

    const totalTasks = tasks.reduce((sum, task) => sum + (task.status === 'completed' ? 1 : 0), 0);
    const mostProductiveDayIndex = tasksPerDay.indexOf(Math.max(...tasksPerDay));
    const averageTasks = (totalTasks / 7).toFixed(2);

    totalTasksElement.textContent = totalTasks;
    productiveDayElement.textContent = days[mostProductiveDayIndex];
    averageTasksElement.textContent = averageTasks;

    // Chart.js setup
    const ctx = document.getElementById('tasksChart').getContext('2d');
    const tasksChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Tasks Completed',
                data: tasksPerDay,
                backgroundColor: '#6e413d',
                borderColor: '#6e413d',
                borderWidth: 1,
                borderRadius: 5,
                barPercentage: 0.6
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

function login() {
    window.location.href = '/index.html';
}