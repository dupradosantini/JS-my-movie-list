const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll("input");


function toggleMovieModal(){
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
}

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
}

function cancelAddMovieHandler(){ //Cancel button functionality
    toggleMovieModal();
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
    }
}

function backdropClickHandler(){ //Cancel by clicking on backdrop
    toggleMovieModal();
}



startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
