function reaction(){
    if(document.querySelector('#inputLine input').value.length === 0){
        alert("Чет ты ниче не ввел")
    }
    else{
        const film_name = document.querySelector('#inputLine input').value
        addFilm(film_name)
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(film_name);
        saveTasksToLocalStorage(tasks);
    }
}

function addFilm(film_name) {
    document.querySelector('#schedule_films').innerHTML += `
            <div class="schedule_film">
                <span id="schedule_film_film">
                    ${film_name}
                </span>
                <button class="film_delete_button">Удалить</button>
            </div>
        `;
    document.querySelector('#inputLine input').value = ""
    const current_films = document.querySelectorAll(".film_delete_button");
    for(let i=0; i<current_films.length; i++){
        current_films[i].onclick = function(){
            removeTaskFromLocalStorage(i);
            this.parentNode.remove();
        }
    }
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addFilm(task));
}

function removeTaskFromLocalStorage(i) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(i, 1);
    saveTasksToLocalStorage(tasks);
}


document.querySelector('#push').onclick = reaction;

document.querySelector('#inputLine input').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        reaction();
    }
});

(function() {
    window.addEventListener('load', function() {
        loadTasksFromLocalStorage()
    });
})();