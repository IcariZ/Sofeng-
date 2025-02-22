const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// now date
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getTasksFromLocal() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function highlightTaskDates() {
    let tasks = getTasksFromLocal();
    let taskDates = tasks.map(task => task.deadline); 

    daysTag.querySelectorAll('li').forEach(day => {
        let dayNumber = parseInt(day.innerText);
        let dayDate = new Date(currYear, currMonth, dayNumber);
        let formattedDate = dayDate.toISOString().split('T')[0];
        if (taskDates.includes(formattedDate)) {
            day.classList.add('has-task'); // Add the highlight class
        }
    });
}

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    
    let liTag = "";

    // prev days
    for (let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // today and other days
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
            && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
    }

    // next days
    for (let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;

    highlightTaskDates();
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        // buat ganti month
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }

        renderCalendar();
    });
});

function login(){
    window.location.href = '/index.html';
}

const   todayBtn = document.querySelector(".today-btn");
todayBtn.addEventListener("click", () => {
    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
    renderCalendar();
});
  