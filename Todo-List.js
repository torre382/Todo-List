function myValidation() {
    let task = document.getElementById("InputTask");
    let days = document.getElementById("DaysToComplete"); 
    let form = document.getElementById("myForm");
    form.addEventListener('click', function(event){
        if (task.validity.valueMissing) { 
            task.setCustomValidity('Please fill out this field.');
            task.reportValidity();
            event.preventDefault();
            } 
        else if (days.validity.valueMissing) {
            days.setCustomValidity('Please enter a number.');
            days.reportValidity();
            event.preventDefault();
        }
        else if (days.value < 1) {
            days.setCustomValidity('Please select a value that is no less than 1.');
            days.reportValidity();
            event.preventDefault();
        }
        else if (days.validity.typeMismatch) {
            days.setCustomValidity('Please enter a number.');
            days.reportValidity();
            event.preventDefault();
        }
        else { 
            task.setCustomValidity('');
            days.setCustomValidity('');
        } 
    });
}

function myTasks() {
    let task = document.getElementById("InputTask").value;
    let days = Number(document.getElementById("DaysToComplete").value); 

    if (task == "") {
        return false;
    }
    else {
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
        else if (days < 3 & days > 0) {
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
        else if (days >= 7) {
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
        return true;
    }
}
