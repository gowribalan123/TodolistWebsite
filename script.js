const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

  
document.getElementById('login-button').onclick = function() {  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  

    if (username === 'admin' && password === '12345') {  
        document.getElementById('login-container').style.display = 'none';  
        document.getElementById('todo-container').style.display = 'block';  
        document.getElementById('todo-table').style.display = 'none';    
    } else {  
        document.getElementById('error-message').innerText = 'Please enter a valid username and password';  
    }  
};  

//const tasks=document.getElementById('tasks');
const url='https://jsonplaceholder.typicode.com/todos ';          

document.getElementById('todos-button').onclick = function() {     
                  
    fetch(url)  
        .then(response => response.json())  
        .then(data => {  
            const tableBody = document.getElementById('todo-table').querySelector('tbody');  
            tableBody.innerHTML = ''; // Clear previous data  

            data.forEach(todo => {  
                const row = document.createElement('tr');  
                row.innerHTML = `  
                    <td>${todo.id}</td>  
                    <td>${todo.title}</td>  
                    <td ><input type="checkbox" ${todo.completed ? 'checked disabled' : ''} /></td>  
                  
                `;  
                tableBody.appendChild(row);
               
                 
               // console.log(tasks);
   document.getElementById('todo-table').style.display = 'block';    
   
              
            });   
        });  
};  
               



document.getElementById('logout-button').onclick = function() {  
    document.getElementById('todo-container').style.display = 'none';  
    document.getElementById('login-container').style.display = 'block';  
    document.getElementById('username').value = '';  
    document.getElementById('password').value = '';  
    document.getElementById('error-message').innerText = '';  
}; 




/*

function checkCheckboxes(checked) {  
    const promise = new Promise((resolve, reject) => {  
        if (checked === 5) {  
            resolve("Congrats, you have completed 5 tasks");  
        } else {  
            reject("You have not completed 5 tasks yet");  
        }  
    });  
    return promise;
}  

// Example usage  
const checkedBoxes = 5; // Assume user checked 5 checkboxes  

checkCheckboxes(checkedBoxes)  
    .then(message => console.log(message))  
    .catch(error => console.error(error));  

    function checkTasks() {
        return new Promise((resolve, reject) => {
            const checkboxes = document.querySelectorAll(todo.completed);
            let checkedCount = 0;

            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    checkedCount = document.querySelectorAll('.task:checked').length;
                    if (checkedCount === 5) {
                        resolve('Congrats, you have completed 5 tasks');
                    }
                });
            });
        });
    }

    checkTasks().then(message => {
        document.getElementById('message').innerText = message;
    });
*/