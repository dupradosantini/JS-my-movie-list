const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");


function toggleMovieModal(){
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
}

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
}

function cancelAddMovie(){ //Cancel button functionality
    toggleMovieModal();
}

function backdropClickHandler(){ //Cancel by clicking on backdrop
    toggleMovieModal();
}



startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
