const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

function updateUI(){
    if (movies.length === 0){
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

function deleteMovie(movieId){
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++
    }
    movies.splice(movieIndex,1); //removes the item at movieIndex and replaces it by the next.
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
}

function closeMovieDeletionModal(){
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

function deleteMovieHandler(movieId){
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);

    confirmDeletionButton.addEventListener("click", deleteMovie.bind(null, movieId));
}

function renderNewMovieElement (id, title, imageUrl, rating){
    const newMovieElement = document.createElement('li');
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

function closeMovieModal(){
    addMovieModal.classList.remove("visible");
}

function showMovieModal(){
    addMovieModal.classList.add("visible");
    toggleBackdrop();
}

function clearMovieInput(){
    for( const userInput of userInputs){
        userInput.value = "";
    }
}

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
}

function cancelAddMovieHandler(){ //Cancel button functionality
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

function addMovieHandler(){
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratinglValue = userInputs[2].value;

    if( titleValue.trim() === "" || 
        imgUrlValue.trim === "" || ratinglValue.trim === "" || 
        parseInt(ratinglValue) < 1 || 
        parseInt(ratinglValue) > 5){
            alert("please enter valid values (rating between 1 and 5)");
            return;
    }
    const newMovie = {
        id: Math.random().toString(), //just for the sake of the example.
        title: titleValue,
        image: imgUrlValue,
        rating: ratinglValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}

function backdropClickHandler(){ //Cancel by clicking on backdrop
    closeMovieModal();
    closeMovieDeletionModal();
}



startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
