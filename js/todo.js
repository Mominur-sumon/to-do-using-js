function getInputDatabyId(id) {
    return document.getElementById(id).value;
}

function taskReturnById(taskId){
    return document.getElementById(taskId);
}

let taskNumber = 1;

document.getElementById("task-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const taskInput = getInputDatabyId("input-value");
    if (taskInput === "") {
        alert("Please enter a task");
    } else {
        task = `<tr id= "task${taskNumber}">
                <th>${taskNumber}</th>
                <td>${taskInput}</td>
                <td><i class="fa-solid fa-xmark"></i>
              </tr>`
        const allTasks = document.getElementById("content-container");
        allTasks.innerHTML += task;
    }
    taskNumber++;


});

document.getElementById("content-container").addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-xmark")) {
        const task = event.target.parentElement.parentElement;
        task.remove();
    }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    const allTasks = document.getElementById("content-container");
    allTasks.innerHTML = "";
    taskNumber = 1 ;
});