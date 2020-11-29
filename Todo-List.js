const InputTask = document.getElementById('InputTask');

InputTask.addEventListener('input', function (event) {
    if (InputTask.validity.valueMissing) {
        InputTask.setCustomValidity('Please input a number.');
    }
    else {
        InputTask.setCustomValidity('');
    }
});

function myResponse() {

let task = document.getElementById("InputTask").value;
let days = Number(document.getElementById("DaysToComplete").value);

let TaskList = document.getElementById("TaskList");
let newCol = document.createElement("div")


    if (days < 7 & days >= 3) {
        newCol.setAttribute('class', 'col-xl-fluid m-2 alert alert-warning alert-dismissible fade show');
        newCol.setAttribute('role', 'alert');
        newCol.innerHTML = `${task}
        <div class="row">
            <div class="col">${days} day(s)</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        TaskList.appendChild(newCol);
    }
    else if (days < 3) {
        newCol.setAttribute('class', 'col-xl-fluid m-2 alert alert-danger alert-dismissible fade show');
        newCol.setAttribute('role', 'alert');
        newCol.innerHTML = `${task}
        <div class="row">
            <div class="col">${days} day(s)</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        TaskList.appendChild(newCol);
    }
    else {
        newCol.setAttribute('class', 'col-xl-fluid m-2 alert alert-secondary alert-dismissible fade show');
        newCol.setAttribute('role', 'alert');
        newCol.innerHTML = `${task}
        <div class="row">
            <div class="col">${days} day(s)</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        TaskList.appendChild(newCol);
    }

}
