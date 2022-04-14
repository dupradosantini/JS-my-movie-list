const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll("input");

const movies = [];


function toggleMovieModal(){
    addMovieModal.classList.toggle("visible");
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
    toggleMovieModal();
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
        title: titleValue,
        image: imgUrlValue,
        rating: ratinglValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}

function backdropClickHandler(){ //Cancel by clicking on backdrop
    toggleMovieModal();
}



startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
