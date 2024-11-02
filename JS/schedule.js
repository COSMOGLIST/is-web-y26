function reaction(){
    if(document.querySelector('#inputLine input').value.length === 0){
        alert("Чет ты ниче не ввел")
    }
    else{
        const film_name = document.querySelector('#inputLine input').value
        const film_id = generateUniqueId();
        addFilm(film_id, film_name);
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ id: film_id, name: film_name });
        saveTasksToLocalStorage(tasks);
    }
}

function addFilm(film_id, film_name) {
    document.querySelector('#schedule_films').innerHTML += `
            <div class="schedule_film">
                <span id="schedule_film_film">
                    ${film_name}
                </span>
                <button class="film_delete_button" data-film-id="${film_id}">Удалить</button>
            </div>
        `;
    document.querySelector('#inputLine input').value = ""
    const current_films = document.querySelectorAll(".film_delete_button");
    for(let i=0; i<current_films.length; i++){
        current_films[i].onclick = function(){
            const filmId = this.getAttribute("data-film-id");
            removeTaskFromLocalStorage(filmId);
            this.parentNode.remove();
        }
    }
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addFilm(task.id, task.name));
}

function removeTaskFromLocalStorage(filmId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== filmId);
    saveTasksToLocalStorage(tasks);
}

function generateUniqueId() {
    return Math.random().toString(36);
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