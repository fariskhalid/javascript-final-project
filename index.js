async function main() {
    const users = await fetch("https://www.omdbapi.com/?s=fast&apikey=429d7550")
    const usersData = await users.json();
    console.log(usersData)
}

main();






























// const movieSearchBox = document.getElementById('movie-search-box');
// const searchList = document.getElementById('search-list');
// const resultGrid = document.getElementById('result-grid')

// async function loadMovies(searchTerm) {
//     const URL = `http://www.omdbapi.com/?apikey=429d7550&`
//     const res = await fetch(`${URL}`);
//     const data = await res.json();
    
//     if(data.Response === "True") displayMovieList(data.Search);
// }

// function findMovies() {
//     let searchTerm = (movieSearchBox.value).trim();
//     if(searchTerm.length > 0) {
//         searchList.classList.remove('hide-search-list');
//         loadMovies(searchTerm);
//     } else {
//         searchList.classList.add('hide-search-list');
//     }
// }

// function displayMovieList(movies) {
//     searchList.innerHTML = "";
//     for(let idx = 0; idx < movies.length; idx++) {
//         let movieListItem = document.createElement('div');
//         movieListItem.dataset.id = movies[idx].imdbID;
//         movieListItem.classList.add('search-list-item');
//     }
// }