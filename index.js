// const message = document.querySelector("#message");
const message = document.getElementById("message");

function addMovie(event) {
    event.preventDefault();

    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");

    movieTitle.textContent = input.value;
    movie.appendChild(movieTitle);
    movieTitle.addEventListener("click", crossOffMovie);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteMovie);
    deleteButton.style = "background-color: red;";
    movie.appendChild(deleteButton);

    ul.appendChild(movie);
    input.value = "";
}

function deleteMovie(event) {
    const movieName = event.target.parentNode.firstChild.textContent;
    event.target.parentNode.remove();
    message.textContent = `${movieName} Deleted!`;

    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
      message.textContent = `${event.target.textContent} watched`
    } else {
      message.textContent = `${event.target.textContent} added back`
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove("hide");

    setTimeout(() => {
        message.classList.add("hide");
    }, 1000);
}

const form = document.querySelector('form')
form.addEventListener("submit", addMovie)