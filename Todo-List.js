let div = document.querySelector("TaskList");
let newnode = document.createElement("div")

function myResponse() {

let task = document.getElementById("InputTask");
let days = Number(document.getElementById("DaysToComplete").value);

console.log(task);


    if (days < 7) {
        newnode.textContent = "${task} \r\n ${days}";
        newnode.setAttribute('class', 'alert alert-warning');
        newnode.setAttribute('role', 'alert');
        div.appendChild(newnode);  
    }
    else if (days < 3) {
        newnode.textContent = "${task} \r\n ${days}";
        newnode.setAttribute('class', 'alert alert-danger');
        newnode.setAttribute('role', 'alert');
        div.appendChild(newnode);
    }
    else {
        newnode.textContent = "${task} \r\n ${days}";
        newnode.setAttribute('class', 'alert alert-secondary');
        newnode.setAttribute('role', 'alert');
        div.appendChild(newnode);
    }

}