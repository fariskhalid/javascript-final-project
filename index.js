//tmdb

const API_KEY = `api_key=c163553779a045f5c363a4b985bc5b2a`;
const BASE_URL = `https://api.themoviedb.org/3`;
const API_URL = BASE_URL + `/discover/movie?sort_by=popularity.desc&` + API_KEY;
const IMG_URL = `https://image.tmdb.org/t/p/w500`

const main = document.getElementById(`main`);
const form = document.getElementById(`form`);
const search = document.getElementById(`search`);

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })

}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement(`div`);
        movieEl.classList.add(`movie`);
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                ${overview};
            </div>
        `

        main.appendChild(movieEl);
    })
}


function getColor(vote) {
    if(vote >=8) {
        return `green`
    }else if (vote >= 5) {
        return "orange"
    }else{
        return `red`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies()
    }
})






































// async function main() {
//     const users = await fetch("https://www.omdbapi.com/?s=fast&apikey=429d7550");
//     const usersData = await users.json();
//     const userListEl = document.querySelector(".user-list");
//     console.log(usersData);
//     userListEl.innerHTML = usersData
//         .map(
//             (user) =>
//             `<div class="user-card">
//                 <div class="user-card_container">
//                     <h3>${Title}</h4>
//                 </div>
//             </div>`
//         )
//         .join("");
//         }


//     main();

// async function main() {
//     const users = await fetch("https://www.omdbapi.com/?s=fast&apikey=429d7550")
//     .then ((response) => response.json())
//     .then((data) => console.log(data));
// }


//     async function main() {
//         const users = await fetch("http://www.omdbapi.com/?apikey=429d7550&")
//         const img_path = "http://img.omdbapi.com/?apikey=429d7550&"
//         const usersData =  await users.map();
//         const userListEl = document.querySelector(".user-list");
        

//     }
    

// console.log(usersData)
























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